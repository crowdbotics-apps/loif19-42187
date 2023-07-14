import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const youtubeapi_get_captions_list = createAsyncThunk(
  "youtubeapi_response_get_ListCaptions/youtubeapi_get_captions_list",
  async payload => {
    const response = await apiService.youtubeapi_get_captions_list(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const youtubeapi_response_get_ListCaptionsSlice = createSlice({
  name: "youtubeapi_response_get_ListCaptions",
  initialState,
  reducers: {},
  extraReducers: {
    [youtubeapi_get_captions_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [youtubeapi_get_captions_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [youtubeapi_get_captions_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  youtubeapi_get_captions_list,
  slice: youtubeapi_response_get_ListCaptionsSlice
}
