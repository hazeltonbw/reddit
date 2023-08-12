import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getSubreddits } from '../api/reddit'

const initialState = {
  subreddits: [],
  error: false,
  isLoading: false,
}

export const fetchSubreddits = createAsyncThunk(
  'subreddits/fetchSubreddits',
  async () => {
    const response = await getSubreddits()
    return response
  },
)

const subRedditSlice = createSlice({
  name: 'subreddits',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSubreddits.fulfilled, (state, action) => {
      state.subreddits = action.payload
    })
    builder.addCase(fetchSubreddits.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchSubreddits.rejected, (state) => {
      state.isLoading = false
      state.error = true
    })
  },
})

export default subRedditSlice.reducer
export const selectSubreddits = (state) => state.subreddits.subreddits
