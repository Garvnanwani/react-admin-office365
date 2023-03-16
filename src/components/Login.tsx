import { AUTHORIZATION_ENDPOINT } from '../utils/apiEndpoints'
import { CLIENT_ID, REDIRECT_URI, SCOPES } from '../utils/secrets'

const Login = () => {
  const handleLogin = () => {
    // Construct the authorization URL
    const auth_url =
      AUTHORIZATION_ENDPOINT +
      '?client_id=' +
      CLIENT_ID +
      '&response_type=code' +
      '&redirect_uri=' +
      REDIRECT_URI +
      '&scope=' +
      SCOPES

    // Redirect the admin to the authorization URL to authenticate and authorize
    window.location.href = auth_url
  }

  return (
    <div>
      <button onClick={handleLogin}>Login with Microsoft</button>
    </div>
  )
}

export default Login
