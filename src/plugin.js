import * as components from './components'
import './styles/index.css'

const PxUI = {
  install(app) {
    // Register all components
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component)
    })
  }
}

export default PxUI
