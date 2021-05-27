import React, { useContext, useState } from 'react'

import Context from '../../Context'

import api from '../../services/api'

import './index.scss'

interface Employee {
  id: string
  datacad: string
  cargo: string
  cpf: string
  nome: string
  ufnasc: string
  salario: string
  status: string
  createdAt: string
  updatedAt: string
}

const List: React.FC = () => {
  const { list, setList, token } = useContext(Context)
  const [cpf, setRemoveCpf] = useState<string>('')

  async function handleRemoveCpf(): Promise<void> {
    api
      .delete(`employees/${cpf}`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-type': 'Application/json',
          Accept: 'Application/json',
          Authorization: `Basic ${token}`,
        },
      })
      .then(response => {
        console.log(response)

        setList(null)
        setRemoveCpf('')
        alert('Funcionário removido com sucesso.')
      })
      .catch(function (error) {
        const responseError = JSON.parse(error.request.response)

        alert(responseError.error)
      })
  }

  return (
    <>
      <a
        href="/"
        className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom"
      >
        <svg className="bi me-2" width="30" height="24">
          <use xlinkHref="#bootstrap" />
        </svg>
        <span className="fs-5 fw-semibold">Lista</span>
      </a>
      <div className="list-group list-group-flush border-bottom scrollarea">
        {cpf ? (
          <div className="btn-group" role="group">
            <p>Tem certeza que deseja remover?</p>
            <button
              type="button"
              className="btn btn-danger"
              onClick={e => {
                handleRemoveCpf()
              }}
            >
              Remover
            </button>
          </div>
        ) : (
          ''
        )}
        {list
          ? list.map((employee: Employee) => (
              <button
                type="button"
                key={employee.id}
                className="list-group-item list-group-item-action py-3 lh-tight"
                aria-current="true"
                onClick={e => {
                  setRemoveCpf(employee.cpf)
                }}
              >
                <div className="d-flex w-100 align-items-center justify-content-between">
                  <strong className="mb-1">
                    {employee.nome && employee.nome}
                  </strong>
                  <small>{employee.cargo && employee.cargo}</small>
                </div>
                <div className="col-10 mb-1 small">
                  {employee.status && employee.status}
                </div>
              </button>
            ))
          : 'Nada encontrado!'}
      </div>
    </>
  )
}

export default List
