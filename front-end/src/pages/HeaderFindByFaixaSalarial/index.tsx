import React, { useContext, useEffect, useState } from 'react'

import Context from '../../Context'

import api from '../../services/api'

import './index.scss'

const HeaderFindByFaixaSalarial: React.FC = () => {
  const { list, setList, token } = useContext(Context)

  const [faixaInicial, setFaixaInicial] = useState<string>('')
  const [faixaFinal, setFaixaFinal] = useState<string>('')
  const [listFilled, setListFilled] = useState<boolean>(false)

  if (list != '' && !listFilled) {
    setList(null)
    setListFilled(true)
  }

  useEffect(() => {
    if (faixaInicial == '' && faixaFinal == '' && listFilled) {
      setList(null)
      setListFilled(false)
    }

    if (faixaInicial && faixaFinal) {
      api
        .post(
          'employees/faixa_salarial',
          {
            faixaInicial,
            faixaFinal,
          },
          {
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Content-type': 'Application/json',
              Accept: 'Application/json',
              Authorization: `Basic ${token}`,
            },
          },
        )
        .then(response => {
          setList(response.data)
        })
        .catch(function (error) {
          console.log(error.request)
          // const responseError = JSON.parse(error.request.response)
          // alert(responseError.error)
        })
    }
  }, [faixaInicial, faixaFinal, setList, token, listFilled])

  return (
    <>
      <header className="p-3 bg-dark text-white header-faixa-salarial">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <h2>Localizar por Faixa Salarial</h2>

            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
              <input
                type="search"
                className="form-control form-control-dark"
                placeholder="Procurar..."
                aria-label="Procurar"
                onChange={e => {
                  setFaixaInicial(e.target.value)
                }}
              />
              <p>Até</p>
              <input
                type="search"
                className="form-control form-control-dark"
                placeholder="Procurar..."
                aria-label="Procurar"
                onChange={e => {
                  setFaixaFinal(e.target.value)
                }}
              />
            </form>
          </div>
        </div>
      </header>
    </>
  )
}

export default HeaderFindByFaixaSalarial
