// src/plugin.ts
import type { App } from 'vue'
import * as components from './components'
import { applyTheme } from './styles/tokens/color/themes/applyTheme'

import './styles/index.css'

export interface PxUIOptions {
  theme?: Record<string, string>
  disableGlobalRegistration?: boolean
}

const PxUI = {
  install(app: App, options: PxUIOptions = {}) {
    // Register all components
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component)
    })

    // Apply theme overrides
    if (options.theme) {
      applyTheme(options.theme)
    }
  }
}

export default PxUI
