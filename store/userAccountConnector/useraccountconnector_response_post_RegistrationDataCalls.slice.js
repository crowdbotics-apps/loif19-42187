import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const useraccountconnector_post_registration_create = createAsyncThunk(
  "useraccountconnector_response_post_RegistrationDataCalls/useraccountconnector_post_registration_create",
  async payload => {
    const response = await apiService.useraccountconnector_post_registration_create(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const useraccountconnector_response_post_RegistrationDataCallsSlice = createSlice(
  {
    name: "useraccountconnector_response_post_RegistrationDataCalls",
    initialState,
    reducers: {},
    extraReducers: {
      [useraccountconnector_post_registration_create.pending]: (
        state,
        action
      ) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      },
      [useraccountconnector_post_registration_create.fulfilled]: (
        state,
        action
      ) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      },
      [useraccountconnector_post_registration_create.rejected]: (
        state,
        action
      ) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      }
    }
  }
)
export default {
  useraccountconnector_post_registration_create,
  slice: useraccountconnector_response_post_RegistrationDataCallsSlice
}
