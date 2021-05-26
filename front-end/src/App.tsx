import React, {
  Fragment,
  useCallback,
  useEffect,
  useState,
  useContext,
} from 'react'

import { BrowserRouter } from 'react-router-dom'
import Context from './Context'

import Routes from './routes'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './styles/index.scss'

import Login from './pages/Login'

const App: React.FC = () => {
  const [signIn, setSignIn] = useState(false)
  const [list, setList] = useState(null)
  const [token, setToken] = useState(null)

  console.log(signIn)

  return (
    <>
      <Context.Provider
        value={{ signIn, setSignIn, list, setList, token, setToken }}
      >
        {signIn ? (
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        ) : (
          <Login />
        )}
      </Context.Provider>
    </>
  )
}

export default App
