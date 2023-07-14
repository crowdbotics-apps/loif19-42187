import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const spotifyintegrations_get_albums_read = createAsyncThunk(
  "spotifyintegrations_response_get_GetAlbums/spotifyintegrations_get_albums_read",
  async payload => {
    const response = await apiService.spotifyintegrations_get_albums_read(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const spotifyintegrations_response_get_GetAlbumsSlice = createSlice({
  name: "spotifyintegrations_response_get_GetAlbums",
  initialState,
  reducers: {},
  extraReducers: {
    [spotifyintegrations_get_albums_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [spotifyintegrations_get_albums_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [spotifyintegrations_get_albums_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  spotifyintegrations_get_albums_read,
  slice: spotifyintegrations_response_get_GetAlbumsSlice
}
