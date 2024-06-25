import RegisterTemplate from '@/components/templates/RegisterTemplate/RegisterTemplate'
import { useMantineColorScheme } from '@mantine/core'
import { useLayoutEffect } from 'react'

function RegisterPage() {
  const { clearColorScheme } = useMantineColorScheme()

  useLayoutEffect(() => {
    clearColorScheme()
  }, [clearColorScheme])

  return <RegisterTemplate />
}

export default RegisterPage
