import React, { useContext } from 'react'

import Context from '../../Context'

import Menu from '../Menu'
import HeaderFindByUfNascimento from '../HeaderFindByUfNascimento'
import UfList from '../UfList'

import './index.scss'

const PanelFindByUfNascimento: React.FC = () => {
  const { signIn, setSignIn } = useContext(Context)

  return (
    <>
      <div className="container-fluid panel-uf-nascimento">
        <div
          className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
          style={{ width: '20%' }}
        >
          <Menu />
        </div>
        <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white list">
          <HeaderFindByUfNascimento />
          <UfList />
        </div>
      </div>
    </>
  )
}

export default PanelFindByUfNascimento
