import FormLegend from '@/components/atoms/FormLegend/FormLegend'
import styles from './LicenseManagementTemplate.module.css'
import PageTitle from '@/components/atoms/PageTitle/PageTitle'
import { Space } from '@mantine/core'
import Button from '@/components/atoms/Button/Button'
import { useState } from 'react'
import { LicenseManagementModalTypes } from './LicenseManagementTemplate.interfaces'
import Modal from '@/components/atoms/Modal/Modal'
import InfoCard from './components/InfoCard/InfoCard'
import ContractInfo from './components/ContractInfo/ContractInfo'
import CancelSubscriptionModal from './components/CancelSubscriptionModal/CancelSubscriptionModal'
import RequestLicenseModal from './components/RequestLicenseModal/RequestLicenseModal'

function LicenseManagementTemplate() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalType, setModalType] = useState<LicenseManagementModalTypes>(null)
  const modalTitle = modalType === 'cancel' ? 'Cancel Subscription' : 'Request License Change'

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setModalType(null)
  }

  const handleOpenModal = (type: LicenseManagementModalTypes) => {
    setIsModalOpen(true)
    setModalType(type)
  }

  return (
    <main className={styles.Wrapper}>
      <PageTitle title="License Management" />
      <Space h="2xl" />
      <FormLegend title="Product Info" />
      <Space h="2xl" />
      <div className={styles.InfoWrapper}>
        <InfoCard title="# of Active Users" number={8} maximum={20} />
        <InfoCard title="# of Audit Reviews/Day" number={8} maximum={10} />
        <InfoCard title="# of AI Questions/Day" number={1} maximum={10} />
        <InfoCard title="Remaining Contract Days" number={18} />
      </div>
      <Space h="2xl" />
      <FormLegend title="Contract Info" />
      <Space h="xl" />
      <div className={styles.InfoWrapper}>
        <ContractInfo title="Contract Start Date" value="2021-01-01" />
        <ContractInfo title="Contract End Date" value="2022-01-01" />
        <ContractInfo title="Status" value="Active" />
      </div>
      <Space h="2xl" />
      <div className={styles.ActionsWrapper}>
        <Button
          label="Cancel subscription"
          outlined
          onClick={() => handleOpenModal('cancel')}
          data-testid="cancel-subscription-button"
        />
        <Button
          label="Request License Change"
          onClick={() => handleOpenModal('request')}
          data-testid="request-license-button"
        />
      </div>

      <Modal isOpen={isModalOpen} title={modalTitle} onClose={handleCloseModal}>
        {modalType === 'cancel' && <CancelSubscriptionModal />}
        {modalType === 'request' && <RequestLicenseModal />}
      </Modal>
    </main>
  )
}

export default LicenseManagementTemplate
