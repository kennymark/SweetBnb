import axios from 'axios'



const urls = {
  test: `http://localhost:3334`,
  development: 'http://localhost:3333/api/account/',
  production: 'https://your-production-url.com/'
}


const authHeaders = () => {
  if (process.browser) {
    const auth = localStorage.getItem('[EasyPeasyStore]@auth.token')
    const token = JSON.parse(auth)?.data
    return { headers: { Authorization: "Bearer " + token } }
  }
}


const api = axios.create({
  baseURL: urls[process.env.NODE_ENV],
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
})


export { authHeaders }
export default api