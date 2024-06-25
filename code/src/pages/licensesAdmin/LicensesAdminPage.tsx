import { Container } from '@mantine/core'
import Modal from '@/components/atoms/Modal/Modal'
import { useState } from 'react'
import { LicensesModalTypes } from './LicensesAdminPage.interfaces'
import LicenseDetails from './components/LicenseDetails/LicenseDetails'
import DeleteLicense from './components/DeleteLicense/DeleteLicense'
import PageHeader from './components/PageHeader/PageHeader'
import TableFilters from './components/TableFilters/TableFilters'
import Table from '@/components/atoms/Table/Table'
import { sampleLicenses } from '@/data/licenses'
import useTableData from './hooks/useTableData'

const columns = [
  { key: 'organization_name', title: 'Institution Name' },
  { key: 'max_users', title: 'Max Users' },
  { key: 'max_audits', title: '#Audits/Day' },
  { key: 'max_questions', title: '#Questions/Day' },
  { key: 'activation_date', title: 'Activation Date' },
  { key: 'expiration_date', title: 'Expiration Date' },
  { key: 'status', title: 'Status' },
  { key: 'actions', title: 'Actions' }
]

function LicensesAdminPage() {
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)
  const [modalType, setModalType] = useState<LicensesModalTypes>(null)
  const [modalLabel, setModalLabel] = useState('')
  const licensesData = sampleLicenses
  const modalTestId = modalType === 'license' ? 'license-modal' : 'delete-license-modal'

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setIsGenerating(false)
    setModalType(null)
    setSelectedLicense(undefined)
    setModalLabel('')
  }

  const generateLicense = () => {
    setIsGenerating(true)
    setModalLabel('Generate License')
    setModalType('license')
    setIsModalOpen(true)
  }

  const handleTableActions = (modalType: string) => {
    if (modalType === 'license') {
      setModalType(modalType)
      setModalLabel('Edit License')
    } else {
      setModalType('delete')
      setModalLabel('Are you Sure?')
    }
    setIsGenerating(false)
    setIsModalOpen(true)
  }

  const { rowsData, selectedLicense, setSelectedLicense } = useTableData(licensesData, handleTableActions)

  return (
    <main>
      <Container size="xl">
        <PageHeader generateLicense={generateLicense}></PageHeader>
        <TableFilters itemsPerPage={itemsPerPage} setItemsPerPage={setItemsPerPage} />
        <Table rows={rowsData} columns={columns} hasPagination itemsPerPage={itemsPerPage} />
      </Container>
      <Modal isOpen={isModalOpen} title={modalLabel} onClose={handleCloseModal} data-testid={modalTestId}>
        {modalType === 'delete' && <DeleteLicense licenseId={selectedLicense?.id ?? 0} onCancel={handleCloseModal} />}
        {modalType === 'license' && (
          <LicenseDetails license={selectedLicense} onCancel={handleCloseModal} generateMode={isGenerating} />
        )}
      </Modal>
    </main>
  )
}

export default LicensesAdminPage
