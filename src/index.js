import './styles/index.css'

if (typeof document !== 'undefined' && !document.documentElement.classList.contains('nimbus')) {
  document.documentElement.classList.add('nimbus')
}

export { default as PxUI, default } from './plugin'
export * from './components'
