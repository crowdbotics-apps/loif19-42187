import axios from "axios"
const paypalAPI = axios.create({
  baseURL: "https://cbmodules-39279.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function paypalapi_post_modules_paypal_service_createproduct_create(payload) {
  return paypalAPI.post(`/modules/paypal/service/create-product/`, payload.data)
}
function paypalapi_get_modules_paypal_service_plan_id_getplandetails_list(
  payload
) {
  return paypalAPI.get(
    `/modules/paypal/service/${payload.plan_id}/get-plan-details/`
  )
}
export const apiService = {
  paypalapi_post_modules_paypal_service_createproduct_create,
  paypalapi_get_modules_paypal_service_plan_id_getplandetails_list
}
