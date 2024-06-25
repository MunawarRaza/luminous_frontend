import { Container, Text } from '@mantine/core'
import styles from './LicensePlanTemplate.module.css'
import PageTitle from '@/components/atoms/PageTitle/PageTitle'
import Button from '@/components/atoms/Button/Button'
import Modal from '@/components/atoms/Modal/Modal'
import { useState } from 'react'
import ContactUsModal from '@/components/organisms/ContactUsModal/ContactUsModal'
import { LicenseModalTypes } from './LicensePlanTemplate.interfaces'
import LicenseKeyModal from '@/components/organisms/LicenseKeyModal/LicenseKeyModal'

function LicensePlanTemplate() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLicenseApplied, setIsLicenseApplied] = useState(false)
  const [modalType, setModalType] = useState<LicenseModalTypes>(null)
  const modalLabel = modalType === 'license' ? (isLicenseApplied ? 'Congratulations!' : 'License Key') : 'Contact Us'
  const modalTestId = modalType === 'license' ? 'license-key-modal' : 'contact-us-modal'

  const handleOpenModal = (type: LicenseModalTypes) => {
    setModalType(type)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setModalType(null)
    setIsLicenseApplied(false)
  }

  const handleLicenseSubmit = (licenseKey: string) => {
    console.log(licenseKey)
    setIsLicenseApplied(true)
  }

  return (
    <main className={styles.Wrapper}>
      <Container size="xl" className={styles.Container}>
        <PageTitle title="License Plan" />
        <Text fw={700} mt="xl">
          Revolutionize your compliance management with our cutting-edge solution!
        </Text>
        <Text mt="2xl">
          Our platform seamlessly audits compliance reports, eliminating the need for extensive manpower, saving you
          valuable time and resources. Experience the future of compliance management with our innovative solution,
          where we take the complexity out of compliance.
        </Text>
        <Text mt="2xl">
          If you have a License Key, please activate it below. Otherwise, fill the form to contact our Sales
          Representative to negotiate different payment methods and plan strategies for your company.
        </Text>
        <div className={styles.ActionWrapper}>
          <Button
            outlined
            fullWidth
            label="I Have a License Key"
            onClick={() => handleOpenModal('license')}
            data-testid="add-license-button"
          />
          <Button
            label="Contact a Sales Rep"
            fullWidth
            onClick={() => handleOpenModal('contact')}
            data-testid="contact-sales-button"
          />
        </div>
      </Container>
      <Modal isOpen={isModalOpen} title={modalLabel} onClose={handleCloseModal} data-testid={modalTestId}>
        {modalType === 'contact' && <ContactUsModal onClose={handleCloseModal} />}
        {modalType === 'license' && (
          <LicenseKeyModal
            onClose={handleCloseModal}
            onLicenseApply={handleLicenseSubmit}
            isApplied={isLicenseApplied}
          />
        )}
      </Modal>
    </main>
  )
}

export default LicensePlanTemplate
