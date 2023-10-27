import axios from 'axios'

async function mtAuth() {
  const url = import.meta.env.MT_AUTH_URL
  const params = new URLSearchParams()
  params.append('username', import.meta.env.MT_USERNAME)
  params.append('password', import.meta.env.MT_PASSWORD)
  params.append('clientId', 'local')

  console.log('start mt auth...')
  const res = await axios.post(url, params)
  console.log('mt auth done.')

  return res.data.accessToken
}

export { mtAuth }
