import { ref, nextTick, watch, type Ref } from 'vue'

const DEFAULT_SELECTOR =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'

interface FocusTrapOptions {
  /** Reactive open/active state of the trap. */
  active: Ref<boolean>
  /** Selector for focusable elements inside the container. */
  selector?: string
  /** Called when Escape is pressed while the trap is active. */
  onEscape?: () => void
  /**
   * Modal traps (e.g. Dialog) restore focus to the previously-focused element
   * on every close. Non-modal traps (default, e.g. Menu) restore focus only
   * when focus is still inside the container — so dismissing by clicking
   * elsewhere doesn't yank focus back to the trigger.
   */
  modal?: boolean
}

/**
 * Custom focus trap shared by overlay components (Dialog, Menu).
 * - Focuses the first focusable element when `active` becomes true.
 * - Wraps Tab / Shift+Tab at the boundaries so focus can't escape.
 * - Restores focus to the previously-focused element on close.
 *
 * Arrow-key / typeahead navigation is left to the component, which can use the
 * returned `getFocusable()` and delegate Tab/Escape to `handleKeydown`.
 */
export function useFocusTrap(
  container: Ref<HTMLElement | null>,
  { active, selector = DEFAULT_SELECTOR, onEscape, modal = false }: FocusTrapOptions,
) {
  const previouslyFocused = ref<HTMLElement | null>(null)

  function getFocusable(): HTMLElement[] {
    return Array.from(container.value?.querySelectorAll<HTMLElement>(selector) ?? [])
  }

  function focusFirst() {
    // Fall back to the container itself (e.g. a tabindex="-1" dialog) when it
    // has no focusable children. Focusing a container without a tabindex is a
    // harmless no-op.
    const target = getFocusable()[0] ?? container.value
    target?.focus({ preventScroll: true })
  }

  /** Handle Tab boundary-wrap and Escape. Call from the component's keydown. */
  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      onEscape?.()
      return
    }
    if (e.key !== 'Tab') return

    const focusable = getFocusable()
    if (!focusable.length) return

    const first = focusable[0]
    const last = focusable[focusable.length - 1]

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault()
      last.focus()
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault()
      first.focus()
    }
  }

  watch(active, (open) => {
    if (open) {
      previouslyFocused.value = document.activeElement as HTMLElement
      nextTick(focusFirst)
    } else {
      if (modal || container.value?.contains(document.activeElement)) {
        previouslyFocused.value?.focus({ preventScroll: true })
      }
      previouslyFocused.value = null
    }
  })

  return { getFocusable, focusFirst, handleKeydown }
}
