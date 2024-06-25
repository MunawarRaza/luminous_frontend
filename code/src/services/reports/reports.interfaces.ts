export interface UploadUrlResponse {
  url: string
  fields: {
    key: string
    bucket: string
    'X-Amz-Algorithm': string
    'X-Amz-Credential': string
    'X-Amz-Date': string
    'X-Amz-Security-Token': string
    Policy: string
    'X-Amz-Signature': string
  }
}
