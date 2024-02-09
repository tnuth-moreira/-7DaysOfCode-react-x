import { App } from '../layouts/App'
import '../assets/styles/signUp.css'

export const SignUp = () => ( 
  <App>
    <div className='sign-up-container'>
      
      <h1 className='title'>
        React - X
      </h1>
      
      <input className='login-email' placeholder='email@exemplo.com'/>
      <input className='login-senha' placeholder='Senha'/>

      <button className='home-button'>
        Criar uma nova conta
      </button>
      <span>Já possui um conta? <a href='#conta'>Acessar agora</a></span>

    </div>
  </App>
)
