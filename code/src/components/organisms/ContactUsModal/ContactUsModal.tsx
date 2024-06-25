import { SimpleGrid, Text } from '@mantine/core'
import { ContactUsFormValues, ContactUsModalProps } from './ContactUsModal.interfaces'
import styles from './ContactUsModal.module.css'
import TextareaInput from '@/components/atoms/TextareaInput/TextareaInput'
import RegularInput from '@/components/atoms/RegularInput/RegularInput'
import PhoneInput from '@/components/atoms/PhoneInput/PhoneInput'
import { useState } from 'react'
import Button from '@/components/atoms/Button/Button'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { useForm } from '@mantine/form'

function ContactUsModal({ onClose }: ContactUsModalProps) {
  const [isSent, setIsSent] = useState(false)
  const form = useForm<ContactUsFormValues>({
    initialValues: {
      needs: '',
      email: '',
      phone: ''
    }
  })

  const handleSubmit = form.onSubmit((values) => {
    console.log(values)
    setIsSent(true)

    setTimeout(() => {
      onClose()
    }, 3000)
  })

  return (
    <form data-testid="contactus-form" onSubmit={handleSubmit}>
      <Text fw={700} mb="md">
        A Sales Representative will be in touch to better accomodate your company’s needs, so please fill the form below
      </Text>
      <TextareaInput
        label="Explain your needs"
        {...form.getInputProps('needs')}
        placeholder="Write down as many details regarding your chosen payment method"
        data-testid="contactus-textarea"
      />
      <SimpleGrid cols={2} mt="md">
        <RegularInput
          label="Direct Email"
          required
          {...form.getInputProps('email')}
          placeholder="you.email@company.com"
          leftSection={<EnvelopeIcon className={styles.LeftIcon} />}
          data-testid="contactus-email-input"
        />
        <PhoneInput
          label="Phone Number"
          {...form.getInputProps('phone')}
          leftSection={<PhoneIcon className={styles.LeftIcon} />}
          placeholder="(000) 000-0000"
          data-testid="contactus-phone-input"
        />
      </SimpleGrid>
      {isSent && (
        <Text fw={700} mt="lg" ta="center">
          Thank you for your request, we will get back to you as soon as we can
        </Text>
      )}
      <Button label="Send" mt="lg" fullWidth type="submit" data-testid="contactus-submit-button" />
    </form>
  )
}

export default ContactUsModal
