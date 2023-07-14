import axios from "axios"
import { YOUTUBE_API_INTEGRATION_TOKEN } from "react-native-dotenv"
const youtubeIntegration = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${YOUTUBE_API_INTEGRATION_TOKEN}`
  }
})
function youtubeintegration_get_captions_list(payload) {
  return youtubeIntegration.get(`/captions`, {
    params: { part: payload.part, videoId: payload.videoId }
  })
}
function youtubeintegration_get_channels_list(payload) {
  return youtubeIntegration.get(`/channels`, {
    params: {
      part: payload.part,
      categoryId: payload.categoryId,
      forUsername: payload.forUsername,
      id: payload.id
    }
  })
}
export const apiService = {
  youtubeintegration_get_captions_list,
  youtubeintegration_get_channels_list
}
