import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  staticDirs: ['../public'],
  stories: ['../src/components/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-styling',
    'storybook-dark-mode',
    '@storybook/addon-interactions',
    'storybook-addon-react-router-v6'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  docs: {
    autodocs: true
  }
}
export default config
