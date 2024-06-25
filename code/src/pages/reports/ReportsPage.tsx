import Modal from '@/components/atoms/Modal/Modal'
import PageHeader from './components/PageHeader'
import FileUploadForm from '@/components/organisms/FileUploadForm/FileUploadForm'
import { useState } from 'react'
import { useAppDispatch } from '@/store/hooks/store-hooks'
import { uploadReport } from '@/store/actions/reports.actions'
import ReportsTemplate from '@/components/templates/ReportsTemplate/ReportsTemplate'

function ReportsPage() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const dispatch = useAppDispatch()

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)
  const onFileUpload = (file: File) => {
    dispatch(uploadReport({ orgId: '1', file }))
      .unwrap()
      .then(closeModal)
  }

  return (
    <>
      <PageHeader title="Reports Audited" onAdd={openModal} />
      <ReportsTemplate />
      <Modal title="Upload Report" isOpen={isModalOpen} onClose={closeModal}>
        <FileUploadForm onSubmit={onFileUpload} />
      </Modal>
    </>
  )
}

export default ReportsPage
