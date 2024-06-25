interface IContactUsModalProps {
  onClose: () => void
}

export type ContactUsModalProps = IContactUsModalProps

export interface ContactUsFormValues {
  email: string
  phone: string
  needs: string
}
