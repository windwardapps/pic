import axios from 'axios'
export function getBaseUrl() {
  return axios.defaults.baseURL.replace('/api', '')
}

export function getFilename(img) {
  if (!img.file) {
    return ''
  }
  const tokens = img.file.split('/')
  const len = tokens.length
  return tokens[len - 1]
}

export function fixPrefix(url) {
  const tokens = url.split('/uploads/')
  const prefix = getBaseUrl()
  const path = tokens[1]
  return `${prefix}/uploads/${path}`
}
