import { Meta, StoryObj } from '@storybook/react'
import FileUploadForm from './FileUploadForm'
import StoreProvider from '@/providers/StoreProvider'

const meta: Meta = {
  title: 'FileUploadForm',
  component: FileUploadForm,
  decorators: [
    (Story) => (
      <StoreProvider>
        <Story />
      </StoreProvider>
    )
  ]
}

export default meta

type Story = StoryObj<typeof FileUploadForm>

export const Default: Story = {
  name: 'File Upload Form',
  args: {}
}
