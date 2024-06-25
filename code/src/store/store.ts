import { configureStore } from '@reduxjs/toolkit'
// import logger from 'redux-logger'
import rootReducer from './rootReducer'

export const store = configureStore({
  reducer: rootReducer,
  devTools: !import.meta.env.PROD
})

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppStore = ReturnType<typeof setupStore>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
