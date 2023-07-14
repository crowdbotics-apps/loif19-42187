import axios from "axios"
const userAccountConnector = axios.create({
  baseURL: "https://tstcr2020102601-21976.botics.co/rest-auth",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function useraccountconnector_post_registration_create(payload) {
  return userAccountConnector.post(`/registration/`, payload.data)
}
export const apiService = { useraccountconnector_post_registration_create }
