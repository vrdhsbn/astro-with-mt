import axios from 'axios'
import { mtAuth } from '@/utils/mtAuth'

async function getDraft() {
  const accessToken = await mtAuth()
  const url = import.meta.env.MT_ENDPOINT_URL

  console.log('fetching...')
  const res = await axios.get(url + 'entries', {
    headers: {
      'X-MT-Authorization': 'MTAuth accessToken=' + accessToken,
    },
    params: { status: 'Draft' },
  })
  console.log('done.')
  return res.data
}

export { getDraft }
