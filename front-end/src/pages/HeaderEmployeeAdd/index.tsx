import React, { useContext, useEffect, useState } from 'react'

import Context from '../../Context'

import api from '../../services/api'

import './index.scss'

const HeaderEmployeeAdd: React.FC = () => {
  const { setList, token } = useContext(Context)

  const [nome, setNome] = useState<string>('')

  // useEffect(() => {
  //   api
  //     .post(
  //       'employees',
  //       {
  //         nome,
  //       },
  //       {
  //         headers: {
  //           'Access-Control-Allow-Origin': '*',
  //           'Content-type': 'Application/json',
  //           Accept: 'Application/json',
  //           Authorization: `Basic ${token}`,
  //         },
  //       },
  //     )
  //     .then(response => {
  //       console.log(response.data)
  //       setList(response.data)
  //     })
  //     .catch(function (error) {
  //       console.log(error.request)
  //       // const responseError = JSON.parse(error.request.response)
  //       // alert(responseError.error)
  //     })
  // }, [nome, setList, token])

  return (
    <>
      <header className="p-3 bg-dark text-white header-employee-add">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <h2>Incluir novo funcionário</h2>

            {/* <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
              <input
                type="search"
                className="form-control form-control-dark"
                placeholder="Search..."
                aria-label="Search"
                onChange={e => {
                  setNome(e.target.value)
                }}
              />
            </form> */}
          </div>
        </div>
      </header>
    </>
  )
}

export default HeaderEmployeeAdd
