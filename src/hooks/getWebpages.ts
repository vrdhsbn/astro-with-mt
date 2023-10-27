import axios from 'axios'

async function getWebpages(limit = 9999) {
  const url = import.meta.env.MT_ENDPOINT_URL

  console.log('fetching...')
  const res = await axios.get(url + 'pages', { params: { limit: limit } })
  console.log('done.')
  return res.data
}

export { getWebpages }
