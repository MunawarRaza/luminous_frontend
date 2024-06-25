/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { router } from './router/Router'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './styles/index.css'

import '@mantine/core/styles.layer.css'
import '@mantine/dates/styles.layer.css'
import '@mantine/dropzone/styles.layer.css'
import '@mantine/notifications/styles.layer.css'
import StoreProvider from './providers/StoreProvider'
import ThemeProvider from './providers/ThemeProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StoreProvider>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StoreProvider>
)
