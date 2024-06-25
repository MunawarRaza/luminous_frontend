import { createAsyncThunk } from '@reduxjs/toolkit'
import { AppDispatch, RootState } from '../store'

interface CreateAsyncActionParams {
  state: RootState
  dispatch: AppDispatch
  rejectValue: string
}

export const createAsyncAction = createAsyncThunk.withTypes<CreateAsyncActionParams>()
