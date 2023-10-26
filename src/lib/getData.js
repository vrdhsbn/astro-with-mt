import axios from 'axios'

async function getData(method, accessToken) {
  const url = import.meta.env.MT_ENDPOINT_URL

  if (accessToken) {
    console.log('fetching with access token...')
    const res = await axios.get(url + method, {
      headers: {
        'X-MT-Authorization': 'MTAuth accessToken=' + accessToken,
      },
    })
    console.log('done.')
    return res.data
  } else {
    console.log('fetching without access token...')
    const res = await axios.get(url + method)
    console.log('done.')
    return res.data
  }
}

export { getData }
