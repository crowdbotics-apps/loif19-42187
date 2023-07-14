import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const paypalapi_post_modules_paypal_service_createproduct_create = createAsyncThunk(
  "paypalapi_response_post_CreateProducts/paypalapi_post_modules_paypal_service_createproduct_create",
  async payload => {
    const response = await apiService.paypalapi_post_modules_paypal_service_createproduct_create(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const paypalapi_response_post_CreateProductsSlice = createSlice({
  name: "paypalapi_response_post_CreateProducts",
  initialState,
  reducers: {},
  extraReducers: {
    [paypalapi_post_modules_paypal_service_createproduct_create.pending]: (
      state,
      action
    ) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [paypalapi_post_modules_paypal_service_createproduct_create.fulfilled]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [paypalapi_post_modules_paypal_service_createproduct_create.rejected]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  paypalapi_post_modules_paypal_service_createproduct_create,
  slice: paypalapi_response_post_CreateProductsSlice
}
