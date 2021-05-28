import React, { useContext, useEffect, useState, FormEvent } from 'react'

import Context from '../../Context'

import api from '../../services/api'

import './index.scss'

const EmployeeForm: React.FC = () => {
  const { token } = useContext(Context)

  const [nome, setNome] = useState<string>('')
  const [cpf, setCpf] = useState<string>('')
  const [cargo, setCargo] = useState<string>('')
  const [dataDeCadastro, setDateRegister] = useState<string>('')
  const [ufDeNascimento, setUf] = useState<string>('')
  const [salario, setSalario] = useState<string>('')
  const [status, setStatus] = useState<string>('')

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault()

    api
      .post(
        'employees',
        {
          nome,
          cpf,
          cargo,
          dataDeCadastro,
          ufDeNascimento,
          salario,
          status,
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
        if (response.statusText == 'Created') {
          alert('Cadastrado com sucesso.')
        }
      })
      .catch(function (error) {
        const responseError = JSON.parse(error.request.response)

        alert(responseError.error)
      })
  }

  return (
    <>
      <form className="employee-form" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nome" className="form-label">
            Nome
          </label>
          <input
            type="text"
            className="form-control"
            id="nome"
            onChange={e => {
              setNome(e.target.value)
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="cpf" className="form-label">
            CPF
          </label>
          <input
            type="text"
            className="form-control"
            id="cpf"
            aria-describedby="cpfHelp"
            onChange={e => {
              setCpf(e.target.value)
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cargo" className="form-label">
            Cargo
          </label>
          <input
            type="text"
            className="form-control"
            id="cargo"
            aria-describedby="cargoHelp"
            onChange={e => {
              setCargo(e.target.value)
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="dataDeCadastro" className="form-label">
            Data de cadastro
          </label>
          <input
            type="text"
            className="form-control"
            id="dataDeCadastro"
            aria-describedby="dataDeCadastroHelp"
            onChange={e => {
              setDateRegister(e.target.value)
            }}
          />
          <div id="dataDeCadastroHelp" className="form-text">
            Data no formato XXXX-XX-XX
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="uf" className="form-label">
            UF
          </label>
          <input
            type="text"
            className="form-control"
            id="uf"
            aria-describedby="ufHelp"
            onChange={e => {
              setUf(e.target.value)
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="salario" className="form-label">
            Salário
          </label>
          <input
            type="text"
            className="form-control"
            id="salario"
            aria-describedby="salarioHelp"
            onChange={e => {
              setSalario(e.target.value)
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="statusHelp" className="form-label">
            Status
          </label>
          <select
            className="form-select"
            aria-describedby="statusHelp"
            onChange={e => {
              setStatus(e.target.value)
            }}
          >
            <option selected>Selecionar</option>
            <option value="ATIVO">ATIVO</option>
            <option value="INATIVO">INATIVO</option>
            <option value="BLOQUEADO">BLOQUEADO</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </>
  )
}

export default EmployeeForm
