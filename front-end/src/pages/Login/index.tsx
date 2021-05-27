import React, { useContext, useState, FormEvent } from 'react'

import { Link } from 'react-router-dom'

import api from '../../services/api'

import Context from '../../Context'

import bootstrapLogo from '../../assets/img/svg/bootstrap-logo.svg'

import './index.scss'

interface Response {
  user: Record<string, unknown>
  token: string
}

const Login: React.FC = () => {
  const { setSignIn, setToken, setUserName } = useContext(Context)

  const [email, setEmail] = useState<string | null>(null)
  const [password, setPassword] = useState<string | null>(null)

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault()

    api
      .post('sessions', {
        email,
        password,
      })
      .then(response => {
        setSignIn(true)
        setUserName(response.data.user.name)
        setToken(response.data.token)
      })
      .catch(function (error) {
        const responseError = JSON.parse(error.request.response)

        alert(responseError.message)
      })
  }

  return (
    <>
      <div className="login">
        <main className="form-signin">
          <form onSubmit={handleSubmit}>
            <img
              className="mb-4"
              src={bootstrapLogo}
              alt=""
              width="72"
              height="57"
            />
            <h1 className="h3 mb-3 fw-normal">Por favor faça o login</h1>

            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                onChange={e => {
                  setEmail(e.target.value)
                }}
              />
              <label htmlFor="floatingInput">E-mail</label>
            </div>

            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                onChange={e => {
                  setPassword(e.target.value)
                }}
              />
              <label htmlFor="floatingPassword">Senha</label>
            </div>

            <button
              className="w-100 btn btn-lg btn-primary mt-3 mb-5"
              type="submit"
            >
              Entrar
            </button>
            <p>
              <Link to="/cadastra-se">Cadastra-se</Link>
            </p>
            <p className="mt-5 mb-3 text-muted">
              &copy; {new Date().getUTCFullYear()}
            </p>
          </form>
        </main>
      </div>
    </>
  )
}

export default Login
