import axios from 'axios'

async function getEntries(limit = 9999) {
  const url = import.meta.env.MT_ENDPOINT_URL

  console.log('fetching...')
  const res = await axios.get(url + 'entries', { params: { limit: limit } })
  console.log('done.')
  return res.data
}

export { getEntries }
