import React, { useContext } from 'react'

import Context from '../../Context'

import MobileMenu from '../MobileMenu'
import Menu from '../Menu'
import HeaderEmployeeAdd from '../HeaderEmployeeAdd'
import EmployeeForm from '../EmployeeForm'

import './index.scss'

const PanelEmployeeAdd: React.FC = () => {
  const { signIn, setSignIn } = useContext(Context)

  return (
    <>
      <div className="container-fluid panel-employee-add">
        <MobileMenu />
        <Menu />
        <div className="col-12 col-lg-8 col-xl-9 col-xxl-9 flex-column align-items-stretch flex-shrink-0 bg-white list">
          <HeaderEmployeeAdd />
          <EmployeeForm />
        </div>
      </div>
    </>
  )
}

export default PanelEmployeeAdd
