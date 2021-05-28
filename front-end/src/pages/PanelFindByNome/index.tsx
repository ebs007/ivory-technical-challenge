import React, { useContext } from 'react'

import Context from '../../Context'

import MobileMenu from '../MobileMenu'
import Menu from '../Menu'
import HeaderFindByNome from '../HeaderFindByNome'
import List from '../List'

import './index.scss'

const PanelFindByNome: React.FC = () => {
  const { signIn, setSignIn } = useContext(Context)

  return (
    <>
      <div className="container-fluid panel-nome">
        <MobileMenu />
        <Menu />
        <div className="col-12 col-lg-8 col-xl-9 col-xxl-9 flex-column align-items-stretch flex-shrink-0 bg-white list">
          <HeaderFindByNome />
          <List />
        </div>
      </div>
    </>
  )
}

export default PanelFindByNome
