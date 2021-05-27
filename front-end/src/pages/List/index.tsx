import React, { useContext } from 'react'

import Context from '../../Context'

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
  const { list } = useContext(Context)

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
        {list
          ? list.map((employee: Employee) => (
              <a
                key={employee.id}
                href="#top"
                className="list-group-item list-group-item-action py-3 lh-tight"
                aria-current="true"
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
              </a>
            ))
          : 'Nada encontrado!'}

        {/* <a
            href="#top"
            className="list-group-item list-group-item-action active py-3 lh-tight"
            aria-current="true"
          >
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small>Wed</small>
            </div>
            <div className="col-10 mb-1 small">
              Some placeholder content in a paragraph below the heading and
              date.
            </div>
          </a>
          <a
            href="#top"
            className="list-group-item list-group-item-action py-3 lh-tight"
          >
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small className="text-muted">Tues</small>
            </div>
            <div className="col-10 mb-1 small">
              Some placeholder content in a paragraph below the heading and
              date.
            </div>
          </a>
          <a
            href="#top"
            className="list-group-item list-group-item-action py-3 lh-tight"
          >
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small className="text-muted">Mon</small>
            </div>
            <div className="col-10 mb-1 small">
              Some placeholder content in a paragraph below the heading and
              date.
            </div>
          </a>

          <a
            href="#top"
            className="list-group-item list-group-item-action py-3 lh-tight"
            aria-current="true"
          >
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small className="text-muted">Wed</small>
            </div>
            <div className="col-10 mb-1 small">
              Some placeholder content in a paragraph below the heading and
              date.
            </div>
          </a>
          <a
            href="#top"
            className="list-group-item list-group-item-action py-3 lh-tight"
          >
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small className="text-muted">Tues</small>
            </div>
            <div className="col-10 mb-1 small">
              Some placeholder content in a paragraph below the heading and
              date.
            </div>
          </a>
          <a
            href="#top"
            className="list-group-item list-group-item-action py-3 lh-tight"
          >
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small className="text-muted">Mon</small>
            </div>
            <div className="col-10 mb-1 small">
              Some placeholder content in a paragraph below the heading and
              date.
            </div>
          </a>
          <a
            href="#top"
            className="list-group-item list-group-item-action py-3 lh-tight"
            aria-current="true"
          >
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small className="text-muted">Wed</small>
            </div>
            <div className="col-10 mb-1 small">
              Some placeholder content in a paragraph below the heading and
              date.
            </div>
          </a>
          <a
            href="#top"
            className="list-group-item list-group-item-action py-3 lh-tight"
          >
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small className="text-muted">Tues</small>
            </div>
            <div className="col-10 mb-1 small">
              Some placeholder content in a paragraph below the heading and
              date.
            </div>
          </a>
          <a
            href="#top"
            className="list-group-item list-group-item-action py-3 lh-tight"
          >
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small className="text-muted">Mon</small>
            </div>
            <div className="col-10 mb-1 small">
              Some placeholder content in a paragraph below the heading and
              date.
            </div>
          </a>
          <a
            href="#top"
            className="list-group-item list-group-item-action py-3 lh-tight"
            aria-current="true"
          >
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small className="text-muted">Wed</small>
            </div>
            <div className="col-10 mb-1 small">
              Some placeholder content in a paragraph below the heading and
              date.
            </div>
          </a>
          <a
            href="#top"
            className="list-group-item list-group-item-action py-3 lh-tight"
          >
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small className="text-muted">Tues</small>
            </div>
            <div className="col-10 mb-1 small">
              Some placeholder content in a paragraph below the heading and
              date.
            </div>
          </a>
          <a
            href="#top"
            className="list-group-item list-group-item-action py-3 lh-tight"
          >
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small className="text-muted">Mon</small>
            </div>
            <div className="col-10 mb-1 small">
              Some placeholder content in a paragraph below the heading and
              date.
            </div>
          </a> */}
      </div>
    </>
  )
}

export default List
