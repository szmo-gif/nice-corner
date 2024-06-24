import './login.css'

export default function Login() {
  return (
    <form className="login-form">
      <a href="#">créer un compte</a>
      <h1>se connecter</h1>

      <label htmlFor="username">Nom d'utilisateur</label>
      <input type="text" id="username" name="username" />

      <label htmlFor="password">Mot de passe</label>
      <input type="password" id="password" name="password" />

      <button type="submit">Se connecter</button>

      <a href="#">Mot de passe oublie?</a>

    </form>
  )
}