import axios from 'axios'
import qs from 'query-string'
import download from 'js-file-download';

const API_URL = process.env.REACT_APP_API_URL
const AUTH_HEADER = process.env.REACT_APP_AUTH_HEADER

export default class PostService {
  static async getJobs(limit = 10, page = 1) {
    try {
      const response = await axios.get("https://zainkg.pythonanywhere.com/api/v1/jobs/all/")
      return response
    } catch (e) {
      console.log(e)
    }
  }

  static async getById(id) {
    const response = await axios.get(`https://zainkg.pythonanywhere.com/api/v1/jobs/${id}/detail/`)
    console.log(response)
    return response;
  }

  static async personalData() {
    const response = await axios.post('https://zainkg.pythonanywhere.com/api/v1/resume/personal_data/')
    console.log(response)
    return response;
  }

  static async downloadResume(fileUrl) {
    const response = await axios.get(`https://zainkg.pythonanywhere.com${fileUrl}`)
    console.log(response)
    download(response.data, "resume.docx");
  }

  static async idResume(data) {
    const response = await axios
      .post('https://zainkg.pythonanywhere.com/api/v1/resume/personal_data/', data)
      .then(response =>{ 
        console.log(response.data)
      })
    console.log(response)
    return response;
  }
}


export const createUrl = (route, prms = null) => {
  const params = prms ? `?${qs.stringify(prms)}` : ''
  return decodeURIComponent(`${API_URL}${route}${params}`)
}

export const authHeader = () => ({
  [AUTH_HEADER]: localStorage.getItem('token'),
})

export const apiGet = (route, options = {}) => {
  const { params, headers = {}, secure = false } = options
  const url = createUrl(route, params)

  if (secure) Object.assign(headers, authHeader())

  return axios({
    method: 'get', url, headers,
  })
}

export const apiPost = (route, options = {}) => {
  const {
    params, headers = {}, secure = false, data,
  } = options
  const url = createUrl(route, params)

  if (secure) Object.assign(headers, authHeader())

  return axios({
    method: 'post', url, headers, data,
  })
}

export const apiPut = (route, options = {}) => {
  const {
    params, headers = {}, secure = false, data,
  } = options
  const url = createUrl(route, params)

  if (secure) Object.assign(headers, authHeader())

  return axios({
    method: 'put', url, headers, data,
  })
}

export const apiDelete = (route, options = {}) => {
  const {
    params, headers = {}, secure = false, data,
  } = options
  const url = createUrl(route, params)

  if (secure) Object.assign(headers, authHeader())

  return axios({
    method: 'delete', url, headers, data,
  })
}
