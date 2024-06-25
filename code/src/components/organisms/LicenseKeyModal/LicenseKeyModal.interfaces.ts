interface ILicenseKeyModalProps {
  onClose: () => void
  onLicenseApply: (licenseKey: string) => void
  isApplied: boolean
}

export type LicenseKeyModalProps = ILicenseKeyModalProps

export interface LicenseKeyFormValues {
  licenseKey: string
}
