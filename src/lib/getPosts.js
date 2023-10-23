import axios from 'axios'

const url = import.meta.env.MT_ENDPOINT_URL

async function getPosts() {
  console.log('fetching...')
  const res = await axios.get(url)
  console.log('done.')

  return res.data
}

export { getPosts }
