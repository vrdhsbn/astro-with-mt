import axios from 'axios'
import { mtAuth } from '@/utils/mtAuth'

async function getCustomFields() {
  const accessToken = await mtAuth()
  const url = import.meta.env.MT_ENDPOINT_URL

  console.log('fetching...')
  const res = await axios.get(url + 'fields', {
    headers: {
      'X-MT-Authorization': 'MTAuth accessToken=' + accessToken,
    },
  })
  console.log('done.')

  return res.data
}

export { getCustomFields }
