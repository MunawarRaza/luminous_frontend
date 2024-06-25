import { requests } from '@/libs/axios/axios'
import { ReportsEndpoints } from '../reportsEndpoints'
import { AxiosResponse } from 'axios'
import { UploadUrlResponse } from '../reports.interfaces'

const getUploadUrl = async (organizationId: string, fileName: string): Promise<AxiosResponse<UploadUrlResponse>> => {
  return requests.get(`/api/v1/organizations/${organizationId}${ReportsEndpoints.GET_UPLOAD_URL}?fileName=${fileName}`)
}

export default getUploadUrl
