import axios from 'axios'

const url = 'http://localhost/cgi-bin/MT7-R5402/mt-data-api.cgi/v5/sites/1/entries'

async function getPosts() {
  console.log('fetching...')
  const res = await axios.get(url)
  console.log(res)
  console.log('done.')

  return res.data
}

export { getPosts }
