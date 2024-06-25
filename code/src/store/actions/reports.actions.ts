import getUploadUrl from '@/services/reports/getUploadUrl/getUploadUrl'
import { createAsyncAction } from '../utils/createAsyncAction'
import saveReportToUrl from '@/services/reports/saveReportToUrl/saveReportToUrl'
import { setUploading } from '../slices/reports/reports.slice'
import { setNotification } from '../slices/notification/notification.slice'

export const uploadReport = createAsyncAction<unknown, { file: File; orgId: string }>(
  'reports/uploadReport',
  async (values, { dispatch }) => {
    dispatch(setUploading(true))

    const formData = new FormData()

    try {
      const urlReponse = await getUploadUrl(values.orgId, values.file.name)

      Object.entries(urlReponse.data.fields).forEach(([key, value]) => {
        formData.append(key, value)
      })
      formData.append('file', values.file)

      await saveReportToUrl(urlReponse.data.url, formData)

      dispatch(setNotification({ message: 'Report uploaded successfully', variant: 'success' }))
    } catch (error) {
      console.log(error)

      dispatch(
        setNotification({
          message: 'An error occurred while uploading the report. Please try again later.',
          variant: 'error'
        })
      )
    } finally {
      dispatch(setUploading(false))
    }
  }
)
