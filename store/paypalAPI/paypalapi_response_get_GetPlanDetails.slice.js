import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const paypalapi_get_modules_paypal_service_plan_id_getplandetails_list = createAsyncThunk(
  "paypalapi_response_get_GetPlanDetails/paypalapi_get_modules_paypal_service_plan_id_getplandetails_list",
  async payload => {
    const response = await apiService.paypalapi_get_modules_paypal_service_plan_id_getplandetails_list(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const paypalapi_response_get_GetPlanDetailsSlice = createSlice({
  name: "paypalapi_response_get_GetPlanDetails",
  initialState,
  reducers: {},
  extraReducers: {
    [paypalapi_get_modules_paypal_service_plan_id_getplandetails_list.pending]: (
      state,
      action
    ) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [paypalapi_get_modules_paypal_service_plan_id_getplandetails_list.fulfilled]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [paypalapi_get_modules_paypal_service_plan_id_getplandetails_list.rejected]: (
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
  paypalapi_get_modules_paypal_service_plan_id_getplandetails_list,
  slice: paypalapi_response_get_GetPlanDetailsSlice
}
