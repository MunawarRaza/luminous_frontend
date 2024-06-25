import { useLayoutEffect } from 'react'
import { useMantineColorScheme } from '@mantine/core'
import ResetPasswordFormTemplate from '@/components/templates/ResetPasswordForm/ResetPasswordFormTemplate.tsx'

function ResetPasswordPage() {
  const { clearColorScheme } = useMantineColorScheme()

  useLayoutEffect(() => {
    clearColorScheme()
  }, [clearColorScheme])

  return <ResetPasswordFormTemplate />
}

export default ResetPasswordPage
