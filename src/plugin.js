import * as components from './components'
import './styles/index.css'

if (typeof document !== 'undefined' && !document.documentElement.classList.contains('nimbus')) {
  document.documentElement.classList.add('nimbus')
}

const PxUI = {
  install(app) {
    // Register all components
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component)
    })
  }
}

export default PxUI
