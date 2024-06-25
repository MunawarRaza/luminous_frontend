/* eslint-disable @typescript-eslint/no-empty-function, react-refresh/only-export-components */
import React, { PropsWithChildren } from 'react'
import { vi } from 'vitest'
import { render as testingLibraryRender } from '@testing-library/react'
import { MantineProvider } from '@mantine/core'
import { Provider } from 'react-redux'
import type { RenderOptions } from '@testing-library/react'

import theme from '../src/theme'
import { AppStore, RootState, setupStore } from '@/store/store'

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: Partial<RootState>
  store?: AppStore
}

export function render(ui: React.ReactNode) {
  return testingLibraryRender(<>{ui}</>, {
    wrapper: ({ children }: { children: React.ReactNode }) => (
      <MantineProvider theme={theme}>{children}</MantineProvider>
    )
  })
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<unknown>): JSX.Element {
    return (
      <Provider store={store}>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </Provider>
    )
  }
  return { store, ...testingLibraryRender(ui, { wrapper: Wrapper, ...renderOptions }) }
}

const { getComputedStyle } = window
window.getComputedStyle = (elt) => getComputedStyle(elt)

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn()
  }))
})

class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

const IntersectionObserverMock = vi.fn(() => ({
  disconnect: vi.fn(),
  observe: vi.fn(),
  takeRecords: vi.fn(),
  unobserve: vi.fn()
}))

vi.stubGlobal('IntersectionObserver', IntersectionObserverMock)
vi.stubGlobal('ResizeObserver', ResizeObserver)
