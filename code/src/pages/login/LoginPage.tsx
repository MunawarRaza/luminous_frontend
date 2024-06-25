import LoginTemplate from '@/components/templates/LoginTemplate/LoginTemplate'
import { useMantineColorScheme } from '@mantine/core'
import { useLayoutEffect } from 'react'

const LoginPage = () => {
  const { clearColorScheme } = useMantineColorScheme()

  useLayoutEffect(() => {
    clearColorScheme()
  }, [clearColorScheme])

  return <LoginTemplate />
}

export default LoginPage
