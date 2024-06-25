import '@mantine/core/styles.layer.css'
import '@mantine/dates/styles.layer.css'
import '@mantine/dropzone/styles.layer.css'
import '@mantine/notifications/styles.layer.css'
import '../src/styles/index.css'

import React, { useEffect } from 'react'
import { addons } from '@storybook/preview-api'
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode'
import { MantineProvider, useMantineColorScheme } from '@mantine/core'

import theme from '../src/theme'
import { cssVariableResolver } from '../src/theme/cssVariableResolver'

const channel = addons.getChannel()

function ColorSchemeWrapper({ children }: { children: React.ReactNode }) {
  const { setColorScheme } = useMantineColorScheme()
  const handleColorScheme = (value: boolean) => setColorScheme(value ? 'dark' : 'light')

  useEffect(() => {
    channel.on(DARK_MODE_EVENT_NAME, handleColorScheme)
    return () => channel.off(DARK_MODE_EVENT_NAME, handleColorScheme)
  }, [channel])

  return <>{children}</>
}

export const decorators = [
  (renderStory: any) => <ColorSchemeWrapper>{renderStory()}</ColorSchemeWrapper>,
  (renderStory) => (
    <MantineProvider theme={theme} cssVariablesResolver={cssVariableResolver} withCssVariables>
      {renderStory()}
    </MantineProvider>
  )
]
