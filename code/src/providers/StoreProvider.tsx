import { injectStore } from '@/libs/axios/axiosInterceptos'
import { store } from '@/store/store'
import { Provider } from 'react-redux'

export interface StoreProviderProps {
  children: React.ReactNode
}

injectStore(store)

function StoreProvider({ children }: StoreProviderProps) {
  return <Provider store={store}>{children}</Provider>
}

export default StoreProvider
