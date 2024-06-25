import { axiosInstance } from '@/libs/axios/axios'
import MockAdapter from 'axios-mock-adapter'
import { AuthEndpoints } from '../auth-endpoints.enums'
import { injectStore } from '@/libs/axios/axiosInterceptos'
import { store } from '@/store/store'
import refresh from './refresh'

injectStore(store)

describe('refreshService', () => {
  let mock: MockAdapter

  beforeEach(() => {
    mock = new MockAdapter(axiosInstance)
  })

  it('should refresh the user session', async () => {
    const payload = {
      token:
        'eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.Yzfg1dvQIEh0430JFGEHGLw5a2oH_YeW_HpbZt51V0H78gAXvwBsjvdrsulUXcySFhlCWH7dPY8ftgpbtwmIgrHZKf3BP7rwyvgX03v9bK6zgwcjM2KMlsCsivfFRRLe3zfQWjRLokohew1LBh90PaYOpuy7aNQJL5oZTdgxGlaPhI1qCB-RBKFFjzGb0Bs-0m3m9TjkeEx76B9y9z1OK6x1HAd_8UrWvKP75SCrFbOA7QayREKvveWsZOFkQteIcBj5v1ClCmzWksZSsNTWW0fQuVFVaEcTkVI3AbdPAh25uwquZHOsEExlfDJRbS8idm86aFXYzAUZNfoa_q_RSg.u0gmtQjwTlGN9LrL.p7H9jVKUNEAFm-TYgEnyAKCtXJ-DC3OAh_JAHRQaEotdPovfWIesFvKMpqI6NvrUnociagRundB_Fta_oauQoD-lsLM3db76p_1hARaAeb5YwX0MIgPHHHRNPUZ6xPPvSCFmjsRTAIyv7bJOH56f_qJTSh9dxFcr8E7wuqrKQI15FLl0Am6tX5wN_7NuQs4mqbaDDEo_VB_31-duziwn6PVKcLUNLyOod2Z7vIj1upHPsh37DcF-J42dM9piemBI2EMum8n2pxnmCEY9HFmyqyS3rcKklacNrTmo7MzC_m9_AY1KJ9Yib_gzSmCb13VqRIt-UGtsAjcKsQPk1BUdDw96gbuN4uNnP_SKED-TP4Ynw4Kv1xs8ZFehyoDyuay-xe85e8J5slkQmVpXO5UWQYphxmY--TD0mov9_T2DGDogKCKthaKYpdYkpVMDHh-3FOCte-TlhHemM8ghdM4u0fj-MspEaEGpG3sDZrFM1sLP8NKJ9iTx3-4uL5IUI-OuXqpLQeSUTsI9fEEzcAlV70uWjVlhDDROwgh9qXev_kx6itRclgBrEHPFgaJPrTraGfleunoP5W1BrFWsSoVmZpZuQrbt6uhpwaOHnpXb58XCsHpXXr1wHMFfrbvSwqHDdswarnrJKi7Y0zKpfjOOzl3_sciHfMstnRdA82BZTFpW7MUEGxeFAHeaYrIrvhbY7n7hK3_ptCXT5qcTDOvVKUwK1BI8S9mI7fSLInD5vjWlAxePVK01kUKyO5iIza_TIm_7I2Sp2HqufZsVnu98BiZHmX-CRNivII_ahZmcCQCczgqXQyMcKLblFJf8ckioQQ0RAFcVps2QIrQEfOwDPk_qzk2c8awzfUtR36JMWfIrvVsa3CZ4NaYGP3CowTnLnsXRZ7uVvquT5CtEC1iyPz_k1g-RK4upo0sgnqowSgaCEKP8pa6gzm7qWaD40krZKVofleZJeTGtAzPx6DoRZ4xsAD8KB09AWsnBk30MXJCbCp5A0cWvibJIfkSdSo0OBBasNzFuUA8xG7EKohrUhui_KjpIWAKP6r0e8UKa7HU-xeYDVlHBqdjz5XZVI8rmYUtUfDeMqRlA_0e8vIfl97nRkxdE-LMG0sAoWsp94I3KyPytlpbvFKG-rQk9ZBG3IvgC44-bhhWnm232kk9WAuHieZf-BsWokwVzbJFs_xc3isNOWJpOaP599KwjtriVcuO_fkb1JPS3mQy7-RltROOhf-kdDgdtZG2rn7LAt_a6HY8H_SSospPDXiJLLcmLANZ4ekLn2AK9_9Um2fDS.68rzm0sFHIxfxYfageceTw',
      username: 'username'
    }

    const refreshResponse = {
      accessToken: 'token',
      idToken: 'token'
    }

    mock.onPost(AuthEndpoints.REFRESH, payload).reply(200, refreshResponse)
    const response = await refresh(payload.token, payload.username)
    expect(response.data).toEqual(refreshResponse)
  })
})
