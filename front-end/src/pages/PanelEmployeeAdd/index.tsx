import React, { useContext } from 'react'

import Context from '../../Context'

import Menu from '../Menu'
import HeaderEmployeeAdd from '../HeaderEmployeeAdd'
import EmployeeForm from '../EmployeeForm'

import './index.scss'

const PanelEmployeeAdd: React.FC = () => {
  const { signIn, setSignIn } = useContext(Context)

  return (
    <>
      <div className="container-fluid panel-employee-add">
        <div
          className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
          style={{ width: '20%' }}
        >
          <Menu />
        </div>
        <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white list">
          <HeaderEmployeeAdd />
          <EmployeeForm />
        </div>
      </div>
    </>
  )
}

export default PanelEmployeeAdd
