import React, { useState } from 'react'

import { Switch, Route, Redirect } from 'react-router-dom'
import Context from './Context'

import Routes from './routes'

import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap/dist/js/bootstrap.bundle'

import './styles/index.scss'

import Login from './pages/Login'

import UserRegister from './pages/UserRegister'

const App: React.FC = () => {
  const [signIn, setSignIn] = useState(false)
  const [list, setList] = useState(null)
  const [token, setToken] = useState(null)
  const [userName, setUserName] = useState(null)

  return (
    <>
      <Context.Provider
        value={{
          signIn,
          setSignIn,
          list,
          setList,
          token,
          setToken,
          userName,
          setUserName,
        }}
      >
        {signIn ? (
          <Routes />
        ) : (
          <>
            <Redirect to="/" />
            <Switch>
              <Route path="/" exact component={Login} />
              <Route path="/cadastra-se" exact component={UserRegister} />
            </Switch>
          </>
        )}
      </Context.Provider>
    </>
  )
}

export default App
