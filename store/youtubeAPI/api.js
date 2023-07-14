import axios from "axios"
import { YOUTUBE_API_INTEGRATION_TOKEN } from "react-native-dotenv"
const youtubeAPI = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${YOUTUBE_API_INTEGRATION_TOKEN}`
  }
})
function youtubeapi_get_captions_list(payload) {
  return youtubeAPI.get(`/captions`, {
    params: { part: payload.part, videoId: payload.videoId }
  })
}
function youtubeapi_get_channels_list(payload) {
  return youtubeAPI.get(`/channels`, {
    params: {
      part: payload.part,
      categoryId: payload.categoryId,
      forUsername: payload.forUsername,
      id: payload.id
    }
  })
}
export const apiService = {
  youtubeapi_get_captions_list,
  youtubeapi_get_channels_list
}
