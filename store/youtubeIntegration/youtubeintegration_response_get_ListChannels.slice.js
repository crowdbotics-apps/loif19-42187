import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const youtubeintegration_get_channels_list = createAsyncThunk(
  "youtubeintegration_response_get_ListChannels/youtubeintegration_get_channels_list",
  async payload => {
    const response = await apiService.youtubeintegration_get_channels_list(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const youtubeintegration_response_get_ListChannelsSlice = createSlice({
  name: "youtubeintegration_response_get_ListChannels",
  initialState,
  reducers: {},
  extraReducers: {
    [youtubeintegration_get_channels_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [youtubeintegration_get_channels_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [youtubeintegration_get_channels_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  youtubeintegration_get_channels_list,
  slice: youtubeintegration_response_get_ListChannelsSlice
}
