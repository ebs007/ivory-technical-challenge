import React, { useContext } from 'react'

import Context from '../../Context'

import MobileMenu from '../MobileMenu'
import Menu from '../Menu'
import HeaderFindByUfNascimento from '../HeaderFindByUfNascimento'
import UfList from '../UfList'

import './index.scss'

const PanelFindByUfNascimento: React.FC = () => {
  const { signIn, setSignIn } = useContext(Context)

  return (
    <>
      <div className="container-fluid panel-uf-nascimento">
        <MobileMenu />
        <Menu />
        <div className="col-12 col-lg-8 col-xl-9 col-xxl-9 flex-column align-items-stretch flex-shrink-0 bg-white list">
          <HeaderFindByUfNascimento />
          <UfList />
        </div>
      </div>
    </>
  )
}

export default PanelFindByUfNascimento
