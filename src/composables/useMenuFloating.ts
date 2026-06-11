import { ref, computed, watchEffect } from 'vue'
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  type Placement,
} from '@floating-ui/vue'

interface UseMenuFloatingOptions {
  placement?: Placement
  offset?: number
}

export function useMenuFloating(options: UseMenuFloatingOptions = {}) {
  const reference = ref<HTMLElement | null>(null)
  const floating = ref<HTMLElement | null>(null)
  const isOpen = ref(false)

  const { floatingStyles } = useFloating(reference, floating, {
    placement: options.placement ?? 'bottom-start',
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(options.offset ?? 8),
      flip(),
      shift({ padding: 8 }),
    ],
  })

  const open = () => { isOpen.value = true }
  const close = () => { isOpen.value = false }
  const toggle = () => { isOpen.value = !isOpen.value }

  const triggerAttrs = computed(() => ({
    'aria-expanded': isOpen.value,
    'aria-haspopup': 'menu' as const,
  }))

  const onPointerDown = (e: PointerEvent) => {
    if (
      !reference.value?.contains(e.target as Node) &&
      !floating.value?.contains(e.target as Node)
    ) {
      close()
    }
  }

  watchEffect((onCleanup) => {
    if (isOpen.value) {
      document.addEventListener('pointerdown', onPointerDown)
      onCleanup(() => document.removeEventListener('pointerdown', onPointerDown))
    }
  })

  return {
    reference,
    floating,
    floatingStyles,
    isOpen,
    open,
    close,
    toggle,
    triggerAttrs,
  }
}
