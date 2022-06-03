import Spotify from '../../assets/Spotify_Logo_RGB_Green.png'

export const Login = (): JSX.Element => {

  return (
    <div>
      <h1>Login with your service:</h1>
      <img src={Spotify} alt='Spotify' width='240'/>
    </div>
  )
}
