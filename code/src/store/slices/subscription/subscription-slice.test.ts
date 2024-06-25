import { ISubscription, premiumSubscription } from '@/contracts/subscriptions'
import subscriptionReducer, { setSubscription, removeSubscription } from './subscription.slice'

const initialState: ISubscription | null = null

describe('subscriptionSlice', () => {
  it('should return the initial state on first run', () => {
    expect(subscriptionReducer(undefined, { type: undefined })).toEqual(initialState)
  })

  it('should handle setSubscription', () => {
    const reducer = subscriptionReducer(initialState, setSubscription(premiumSubscription))

    expect(reducer).toEqual(premiumSubscription)
  })

  it('should handle removeSubscription', () => {
    const reducer = subscriptionReducer(initialState, removeSubscription())

    expect(reducer).toEqual(initialState)
  })
})
