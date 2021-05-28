import React, { useContext } from 'react'

import Context from '../../Context'

import MobileMenu from '../MobileMenu'
import Menu from '../Menu'
import HeaderFindByCpf from '../HeaderFindByCpf'
import List from '../List'

import './index.scss'

const PanelFindByCpf: React.FC = () => {
  const { signIn, setSignIn } = useContext(Context)

  return (
    <>
      <div className="container-fluid panel-cpf">
        <MobileMenu />
        <Menu />
        <div className="col-12 col-lg-8 col-xl-9 col-xxl-9 flex-column align-items-stretch flex-shrink-0 bg-white list">
          <HeaderFindByCpf />
          <List />
        </div>
      </div>
    </>
  )
}

export default PanelFindByCpf
