import { ILicense } from '@/contracts/License.contract'

export const sampleLicenses: ILicense[] = [
  {
    id: 1,
    organization_name: 'Dunder Mifflin',
    email: 'michaelscott@dundermifflin.com',
    max_users: 10,
    max_audits: 10,
    max_questions: 50,
    max_reports: 10,
    expiration_date: '01/05/2024',
    activated_date: '01/01/2024',
    license_key: '1ETG-AZ58-T1VU-AH4K-3Z39-BI6V',
    status: 'Active'
  },
  {
    id: 2,
    organization_name: 'BairesDev',
    email: 'roberto.espinoza@bairesdev.com',
    max_users: 20,
    max_audits: 100,
    max_questions: 500,
    max_reports: 100,
    expiration_date: '04/30/2024',
    activated_date: '02/01/2024',
    license_key: '1ETG-AZ58-T1VU-AH4K-3Z39-BI6V',
    status: 'Active'
  },
  {
    id: 3,
    organization_name: 'Acquisitions Incorporated',
    email: 'dm@acquisitionsinc.com',
    max_users: 10,
    max_audits: 10,
    max_questions: 50,
    max_reports: 10,
    expiration_date: '01/01/2024',
    activated_date: '01/01/2023',
    license_key: '1ETG-AZ58-T1VU-AH4K-3Z39-BI6V',
    status: 'Expired'
  },
  {
    id: 4,
    organization_name: 'Conglomo',
    email: 'ceo@conglomo.com',
    max_users: 100,
    max_audits: 200,
    max_questions: 200,
    max_reports: 200,
    expiration_date: '12/12/2024',
    activated_date: '',
    license_key: '1ETG-AZ58-T1VU-AH4K-3Z39-BI6V',
    status: 'Inactive'
  }
]
