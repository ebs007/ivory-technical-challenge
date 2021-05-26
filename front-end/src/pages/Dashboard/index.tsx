import React, { useContext } from 'react'

import Context from '../../Context'

import Menu from '../Menu'
import List from '../List'

import './index.scss'

const Dashboard: React.FC = () => {
  const { signIn, setSignIn } = useContext(Context)

  return (
    <>
      <div className="container-fluid editor">
        <Menu />
        <List />
      </div>
    </>
  )
}

export default Dashboard
