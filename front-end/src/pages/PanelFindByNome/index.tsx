import React, { useContext } from 'react'

import Context from '../../Context'

import Menu from '../Menu'
import HeaderFindByNome from '../HeaderFindByNome'
import List from '../List'

import './index.scss'

const PanelFindByNome: React.FC = () => {
  const { signIn, setSignIn } = useContext(Context)

  return (
    <>
      <div className="container-fluid panel-nome">
        <div
          className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
          style={{ width: '20%' }}
        >
          <Menu />
        </div>
        <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white list">
          <HeaderFindByNome />
          <List />
        </div>
      </div>
    </>
  )
}

export default PanelFindByNome
