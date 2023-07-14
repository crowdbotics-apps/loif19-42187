import axios from "axios"
const emojiIntegration = axios.create({
  baseURL: "https://emoji-api.com",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function emojiintegration_get_emojis_list(payload) {
  return emojiIntegration.get(`/emojis`, {
    params: { access_key: payload.access_key }
  })
}
function emojiintegration_get_emojis_emojislug_list(payload) {
  return emojiIntegration.get(`/emojis/emoji-slug`, {
    params: { access_key: payload.access_key }
  })
}
export const apiService = {
  emojiintegration_get_emojis_list,
  emojiintegration_get_emojis_emojislug_list
}
