import { z } from 'zod'

export interface RequestLicenseFormValues {
  maxUsers: string
  maxAudit: string
  maxQuestions: string
  maxReports: string
  needs: string
}

export interface RequestLicenseModalProps {
  onClose?: () => void
}

export const RequestLicenseSchema = z.object({
  maxUsers: z.string().min(0, 'Needs to add a valid Max users number'),
  maxAudit: z.string().min(0, 'Needs to add a valid Max audit number'),
  maxQuestions: z.string().min(0, 'Needs to add a valid Max questions number'),
  maxReports: z.string().min(0, 'Needs to add a valid Max reports number'),
  needs: z.string().min(10, "Needs can't be empty").max(500, "Needs can't be longer than 500 characters")
})
