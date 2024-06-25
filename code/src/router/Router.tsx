import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { NAV_LINKS } from '@/enums/navLinks'
import SessionProvider from '@/providers/SessionProvider'
import { privateRoutesPerRole, publicRoutes } from './routes'
import Protected from './Protected'
import AppLayout from '@/components/layout/AppLayout'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      {/* PUBLIC ROUTES */}
      {publicRoutes.map((route, index) => (
        <Route key={route.path ?? index} {...route} />
      ))}
      {/* PUBLIC ROUTES */}

      {/* PRIVATE ROUTES */}
      <Route element={<SessionProvider />}>
        <Route element={<AppLayout />}>
          <Route path={NAV_LINKS.NOT_FOUND} element={<h1>Not found page</h1>} />
          {privateRoutesPerRole.map((route, index) => (
            <Route key={index} element={<Protected roles={route.roles} />}>
              <Route key={route.path ?? index} {...route} />
            </Route>
          ))}
        </Route>
      </Route>
      {/* PRIVATE ROUTES */}

      <Route path={NAV_LINKS.NOT_FOUND} element={<h1>Not found page</h1>} />
    </Route>
  )
)
