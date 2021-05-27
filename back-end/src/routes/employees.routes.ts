import { Router } from 'express'
import { getCustomRepository } from 'typeorm'
import { parseISO } from 'date-fns'

import EmployeesRepository from '../repositories/EmployeeRepository'
import CreateEmployeeService from '../services/CreateEmployeeService'
import RemoveEmployeeService from '../services/RemoveEmployeeService'

import ensureAuthenticated from '../middlewares/ensureAuthenticated'

const employeesRouter = Router()

employeesRouter.use(ensureAuthenticated)

employeesRouter.get('/', async (request, response) => {
  const employeeRepository = getCustomRepository(EmployeesRepository)
  const employee = await employeeRepository.find()

  return response.json(employee)
})
employeesRouter.post('/nome', async (request, response) => {
  const nome = request.body.nome
  const employeeRepository = getCustomRepository(EmployeesRepository)
  const employee = await employeeRepository.findByNome(nome)

  return response.json(employee)
})
employeesRouter.post('/cpf', async (request, response) => {
  const cpf = parseInt(request.body.cpf)
  const employeeRepository = getCustomRepository(EmployeesRepository)
  const employee = await employeeRepository.findByCpf(cpf)

  return response.json(employee)
})
employeesRouter.post('/cargo', async (request, response) => {
  const cargo = request.body.cargo
  const employeeRepository = getCustomRepository(EmployeesRepository)
  const employee = await employeeRepository.findByCargo(cargo)

  return response.json(employee)
})
employeesRouter.post('/data_de_cadastro', async (request, response) => {
  function appendLeadingZeroes(n) {
    if (n <= 9) {
      return '0' + n
    }
    return n
  }

  const dateObj = new Date(request.body.date)

  var date = appendLeadingZeroes(dateObj.getUTCDate()),
    month = appendLeadingZeroes(dateObj.getUTCMonth() + 1),
    year = dateObj.getUTCFullYear()
  var formatted = `${year}-${month}-${date}`

  const employeeRepository = getCustomRepository(EmployeesRepository)
  const employee = await employeeRepository.findByDateRegister(formatted)

  return response.json(employee)
})
employeesRouter.post('/uf', async (request, response) => {
  const uf = request.body.uf
  const employeeRepository = getCustomRepository(EmployeesRepository)
  const employee = await employeeRepository.findByUfNascimento(uf)

  return response.json(employee)
})
employeesRouter.post('/faixa_salarial', async (request, response) => {
  const faixaInicial = parseInt(request.body.faixaInicial)
  const faixaFinal = parseInt(request.body.faixaFinal)
  const employeeRepository = getCustomRepository(EmployeesRepository)
  const employee = await employeeRepository.findByFaixaSalarial(
    faixaInicial,
    faixaFinal,
  )

  return response.json(employee)
})
employeesRouter.post('/status', async (request, response) => {
  const status = request.body.status
  const employeeRepository = getCustomRepository(EmployeesRepository)
  const employee = await employeeRepository.findByStatus(status)

  return response.json(employee)
})

employeesRouter.post('/', async (request, response) => {
  try {
    const {
      dataDeCadastro,
      cargo,
      cpf,
      nome,
      ufDeNascimento,
      salario,
      status,
    } = request.body

    const createEmployeeService = new CreateEmployeeService()

    const employee = await createEmployeeService.execute({
      dataCad: dataDeCadastro,
      cargo: cargo,
      cpf: cpf,
      nome: nome,
      ufNasc: ufDeNascimento,
      salario: salario,
      status: status,
    })

    return response.json(employee)
  } catch (err) {
    return response.status(400).json({ error: err.message })
  }
})
employeesRouter.delete('/:cpf', async (request, response) => {
  try {
    const { cpf } = request.params

    const removeEmployeeService = new RemoveEmployeeService()

    await removeEmployeeService.execute({
      cpf: cpf,
    })

    return response.status(202).json({ status: 'Employee removed.' })
  } catch (err) {
    return response.status(400).json({ error: err.message })
  }
})

export default employeesRouter
