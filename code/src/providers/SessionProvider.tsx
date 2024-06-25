import { NAV_LINKS } from '@/enums/navLinks'
import { refreshSession } from '@/store/actions/auth.actions'
import { useAppDispatch, useAppSelector } from '@/store/hooks/store-hooks'
import { useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

function SessionProvider() {
  const [isLoading, setIsLoading] = useState(true)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const accessToken = useAppSelector((state) => state.auth.token)
  const from = location.state?.from?.pathname ?? location?.pathname ?? NAV_LINKS.DASHBOARD

  useEffect(() => {
    let isMounted = true

    const setRefreshSession = async () => {
      try {
        await dispatch(refreshSession()).unwrap()
        return navigate(from, { replace: true })
      } catch (error) {
        console.log(error)
        navigate(NAV_LINKS.LOGIN, { replace: true })
      } finally {
        isMounted && setIsLoading(false)
      }
    }

    !accessToken ? setRefreshSession() : setIsLoading(false)

    return () => {
      isMounted = false
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return isLoading ? <p>Loading session...</p> : <Outlet />
}

export default SessionProvider
