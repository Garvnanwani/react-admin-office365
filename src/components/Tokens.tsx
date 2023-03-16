import { useState } from 'react'
import qs from 'qs'
import { TOKEN_ENDPOINT } from '../utils/apiEndpoints'
import { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } from '../utils/secrets'
import { useParams } from 'react-router-dom'

const Tokens = () => {
  const [access_token, setAccessToken] = useState(null)
  const [refresh_token, setRefreshToken] = useState(null)

  const handleTokenExchange = () => {
    // Parse the authorization code from the URL query parameters
    const query = qs.parse(window.location.search, {
      ignoreQueryPrefix: true,
    })
    const authorization_code = query.code

    console.log({ authorization_code })

    // Exchange the authorization code for an access token and a refresh token
    fetch(TOKEN_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: qs.stringify({
        grant_type: 'authorization_code',
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: authorization_code,
        redirect_uri: REDIRECT_URI,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setAccessToken(data.access_token)
        setRefreshToken(data.refresh_token)
      })
  }

  return (
    <>
      <button onClick={handleTokenExchange}>
        Exchange Authorization Code for Tokens
      </button>
      {access_token && <p>Access Token: {access_token}</p>}
      {refresh_token && <p>Refresh Token: {refresh_token}</p>}
    </>
  )
}

export default Tokens
