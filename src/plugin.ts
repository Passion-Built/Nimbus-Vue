// src/plugin.ts
import type { App } from 'vue'
import * as components from './components'

import './styles/index.css'

const PxUI = {
  install(app: App) {
    // Register all components
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component)
    })
  }
}

export default PxUI
