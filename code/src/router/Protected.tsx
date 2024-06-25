import { NAV_LINKS } from '@/enums/navLinks'
import { USER_ROLES } from '@/enums/userRoles'
import { useAppSelector } from '@/store/hooks/store-hooks'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

interface IProtectedProps {
  roles?: USER_ROLES[]
}

function Protected({ roles }: IProtectedProps) {
  const isSignedIn = useAppSelector((state) => state.auth.isSignedIn)
  const user = useAppSelector((state) => state.auth.user)
  const location = useLocation()

  if (!isSignedIn) return <Navigate to={NAV_LINKS.LOGIN} state={{ from: location }} replace />

  return user && roles?.includes(user.role.name) ? <Outlet /> : <Navigate to={NAV_LINKS.NOT_FOUND} replace />
}

export default Protected
