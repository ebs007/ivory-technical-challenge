import React, {
  Fragment,
  useCallback,
  useContext,
  useEffect,
  useState,
  FormEvent,
} from 'react'

import api from '../../services/api'

import Context from '../../Context'

import './login.scss'

interface Response {
  user: Record<string, unknown>
  token: string
}

const Login: React.FC = () => {
  const { signIn, setSignIn, setToken } = useContext(Context)
  console.log(signIn)

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
        console.log(response.data.token)
        setSignIn(true)
        setToken(response.data.token)
      })
      .catch(function (error) {
        console.log(error.request)
        // const responseError = JSON.parse(error.request.response)
        // alert(responseError.error)
      })
  }

  return (
    <>
      <div className="login">
        <main className="form-signin">
          <form onSubmit={handleSubmit}>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

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
              <label htmlFor="floatingInput">Email address</label>
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
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Sign in
            </button>
          </form>
        </main>
      </div>
    </>
  )
}

export default Login
