import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const emojiintegration_get_emojis_list = createAsyncThunk(
  "emojiintegration_response_get_Newdatacalls/emojiintegration_get_emojis_list",
  async payload => {
    const response = await apiService.emojiintegration_get_emojis_list(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const emojiintegration_response_get_NewdatacallsSlice = createSlice({
  name: "emojiintegration_response_get_Newdatacalls",
  initialState,
  reducers: {},
  extraReducers: {
    [emojiintegration_get_emojis_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [emojiintegration_get_emojis_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [emojiintegration_get_emojis_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  emojiintegration_get_emojis_list,
  slice: emojiintegration_response_get_NewdatacallsSlice
}
