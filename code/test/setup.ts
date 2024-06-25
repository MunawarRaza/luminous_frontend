import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'

window.alert = (msg) => {
  console.log(msg)
}
window.matchMedia = () => ({
  matches: false,
  addEventListener: () => false,
  removeEventListener: () => false,
  media: '',
  onchange: null,
  removeListener: () => false,
  dispatchEvent: () => true,
  addListener: () => false
})
window.scrollTo = () => {
  return true
}

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup()
})
