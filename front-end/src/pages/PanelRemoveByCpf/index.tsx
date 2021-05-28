import React, { useContext } from 'react'

import Context from '../../Context'

import MobileMenu from '../MobileMenu'
import Menu from '../Menu'
import HeaderFindByCpf from '../HeaderFindByCpf'
import RemoveEmployeeCpf from '../RemoveEmployeeCpf'

import './index.scss'

const PanelRemoveByCpf: React.FC = () => {
  const { signIn, setSignIn } = useContext(Context)

  return (
    <>
      <div className="container-fluid panel-cpf">
        <MobileMenu />
        <Menu />
        <div className="col-12 col-lg-8 col-xl-9 col-xxl-9 flex-column align-items-stretch flex-shrink-0 bg-white list">
          <HeaderFindByCpf />
          <RemoveEmployeeCpf />
        </div>
      </div>
    </>
  )
}

export default PanelRemoveByCpf
