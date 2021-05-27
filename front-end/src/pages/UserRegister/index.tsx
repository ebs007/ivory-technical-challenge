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

  const [name, setName] = useState<string | null>(null)
  const [email, setEmail] = useState<string | null>(null)
  const [password, setPassword] = useState<string | null>(null)

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault()

    api
      .post('users', {
        name,
        email,
        password,
      })
      .then(response => {
        alert('Usuário criado. Por favor faça o login.')
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
            <h1 className="h3 mb-3 fw-normal">Cadastra-se</h1>

            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="John Doe"
                onChange={e => {
                  setName(e.target.value)
                }}
              />
              <label htmlFor="floatingInput">Nome</label>
            </div>

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
              Cadastrar
            </button>
            <p>
              <Link to="/">Entrar</Link>
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
