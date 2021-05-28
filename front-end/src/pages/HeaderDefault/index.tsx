import React, { useContext, useEffect, useState } from 'react'

import Context from '../../Context'

import api from '../../services/api'

import './index.scss'

const Header: React.FC = () => {
  const { setList, token } = useContext(Context)

  useEffect(() => {
    api
      .get('employees', {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-type': 'Application/json',
          Accept: 'Application/json',
          Authorization: `Basic ${token}`,
        },
      })
      .then(response => {
        setList(response.data)
      })
      .catch(function (error) {
        console.log(error.request)
        // const responseError = JSON.parse(error.request.response)
        // alert(responseError.error)
      })
  }, [setList, token])

  return (
    <>
      <header className="p-3 bg-dark text-white header-default">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <h2>Todos os funcionários</h2>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
