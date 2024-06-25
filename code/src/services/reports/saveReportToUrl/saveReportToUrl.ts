import axios, { AxiosResponse } from 'axios'

const saveReportToUrl = async (url: string, fields: FormData): Promise<AxiosResponse> => {
  console.log('url', url)
  console.log('fields', fields)

  return axios.post(url, fields)
}

export default saveReportToUrl
