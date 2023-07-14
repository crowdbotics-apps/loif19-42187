import axios from "axios"
import { SPOTIFY_API_INTEGRATION_TOKEN } from "react-native-dotenv"
const spotifyIntegrations = axios.create({
  baseURL: "https://api.spotify.com/v1",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${SPOTIFY_API_INTEGRATION_TOKEN}`
  }
})
function spotifyintegrations_get_albums_read(payload) {
  return spotifyIntegrations.get(`/albums/`)
}
function spotifyintegrations_get_artists_read(payload) {
  return spotifyIntegrations.get(`/artists/`)
}
export const apiService = {
  spotifyintegrations_get_albums_read,
  spotifyintegrations_get_artists_read
}
