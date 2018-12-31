import axios from 'axios'
export function getBaseUrl() {
  return axios.defaults.baseURL.replace('/api', '')
}
