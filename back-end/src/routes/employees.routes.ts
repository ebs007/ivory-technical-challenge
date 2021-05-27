import { Router } from 'express'
import { getCustomRepository } from 'typeorm'
import { parseISO } from 'date-fns'

import EmployeesRepository from '../repositories/EmployeeRepository'
import CreateEmployeeService from '../services/CreateEmployeeService'
import RemoveEmployeeService from '../services/RemoveEmployeeService'

import ensureAuthenticated from '../middlewares/ensureAuthenticated'

const employeesRouter = Router()

employeesRouter.use(ensureAuthenticated)

/**
 * @swagger
 *
 * components:
 *    securitySchemes:
 *      bearerAuth:
 *        type: http
 *        scheme: bearer
 *        bearerFormat: JWT
 */

/**
 * @swagger
 *
 * /employees/:
 *  get:
 *      tags:
 *         - "Lista"
 *      summary: "Lista todos os funcionários"
 *      description: "Retorna todos os funcionários"
 *      operationId: "List"
 *
 *
 *
 *      responses:
 *        "200":
 *          description: "Retorna todos os funcionários"
 *          content:
 *              application/json:
 *                schema:
 *                  type: object
 *                  properties:
 *                    id:
 *                      type: string
 *                      example: 09c22351-bd96-46ec-8799-951d580f3e7d
 *                    datacad:
 *                      type: string
 *                      example: 2018-03-04
 *                    cargo:
 *                      type: string
 *                      example: Dev Jr
 *                    cpf:
 *                      type: string
 *                      example: 85235708709
 *                    nome:
 *                      type: string
 *                      example: Aaron Aaberg
 *                    ufnasc:
 *                      type: string
 *                      example: AP
 *                    salario:
 *                      type: string
 *                      example: $8,965.30
 *                    status:
 *                      type: string
 *                      example: ATIVO
 *                    created_at:
 *                      type: string
 *                      example: 2021-05-24T22:10:56.338Z
 *                    updated_at:
 *                      type: string
 *                      example: 2021-05-24T22:10:56.338Z
 *        "401":
 *          description: "JWT token is missing"
 *      security:
 *        - bearerAuth: []
 */
employeesRouter.get('/', async (request, response) => {
  const employeeRepository = getCustomRepository(EmployeesRepository)
  const employee = await employeeRepository.find()

  return response.json(employee)
})

/**
 * @swagger
 *
 * /employees/nome:
 *  post:
 *      tags:
 *         - "Localizar por nome"
 *      summary: "Localizar por nome"
 *      description: "Localizar por nome"
 *      operationId: "nome"
 *      requestBody:
 *         required: true
 *         content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   nome:
 *                     type: string
 *      responses:
 *        "200":
 *          description: "Retorna todos os funcionários"
 *          content:
 *              application/json:
 *                schema:
 *                  type: "array"
 *                  items:
 *                      type: object
 *                      properties:
 *                        id:
 *                          type: string
 *                          example: 09c22351-bd96-46ec-8799-951d580f3e7d
 *                        datacad:
 *                          type: string
 *                          example: 2018-03-04
 *                        cargo:
 *                          type: string
 *                          example: Dev Jr
 *                        cpf:
 *                          type: string
 *                          example: 85235708709
 *                        nome:
 *                          type: string
 *                          example: Aaron Aaberg
 *                        ufnasc:
 *                          type: string
 *                          example: AP
 *                        salario:
 *                          type: string
 *                          example: $8,965.30
 *                        status:
 *                          type: string
 *                          example: ATIVO
 *                        created_at:
 *                          type: string
 *                          example: 2021-05-24T22:10:56.338Z
 *                        updated_at:
 *                          type: string
 *                          example: 2021-05-24T22:10:56.338Z
 *        "401":
 *          description: "JWT token is missing"
 *      security:
 *        - bearerAuth: []
 */
employeesRouter.post('/nome', async (request, response) => {
  const nome = request.body.nome
  const employeeRepository = getCustomRepository(EmployeesRepository)
  const employee = await employeeRepository.findByNome(nome)

  return response.json(employee)
})

/**
 * @swagger
 *
 * /employees/cpf:
 *  post:
 *      tags:
 *         - "Localizar por CPF"
 *      summary: "Localizar por CPF"
 *      description: "Localizar por CPF"
 *      operationId: "cpf"
 *      requestBody:
 *         required: true
 *         content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   cpf:
 *                     type: string
 *      responses:
 *        "200":
 *          description: "Retorna todos os funcionários"
 *          content:
 *              application/json:
 *                schema:
 *                  type: "array"
 *                  items:
 *                      type: object
 *                      properties:
 *                        id:
 *                          type: string
 *                          example: 09c22351-bd96-46ec-8799-951d580f3e7d
 *                        datacad:
 *                          type: string
 *                          example: 2018-03-04
 *                        cargo:
 *                          type: string
 *                          example: Dev Jr
 *                        cpf:
 *                          type: string
 *                          example: 85235708709
 *                        nome:
 *                          type: string
 *                          example: Aaron Aaberg
 *                        ufnasc:
 *                          type: string
 *                          example: AP
 *                        salario:
 *                          type: string
 *                          example: $8,965.30
 *                        status:
 *                          type: string
 *                          example: ATIVO
 *                        created_at:
 *                          type: string
 *                          example: 2021-05-24T22:10:56.338Z
 *                        updated_at:
 *                          type: string
 *                          example: 2021-05-24T22:10:56.338Z
 *        "401":
 *          description: "JWT token is missing"
 *      security:
 *        - bearerAuth: []
 */
employeesRouter.post('/cpf', async (request, response) => {
  const cpf = parseInt(request.body.cpf)
  const employeeRepository = getCustomRepository(EmployeesRepository)
  const employee = await employeeRepository.findByCpf(cpf)

  return response.json(employee)
})

/**
 * @swagger
 *
 * /employees/cargo:
 *  post:
 *      tags:
 *         - "Localizar por cargo"
 *      summary: "Localizar por cargo"
 *      description: "Localizar por cargo"
 *      operationId: "cargo"
 *      requestBody:
 *         required: true
 *         content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   cargo:
 *                     type: string
 *      responses:
 *        "200":
 *          description: "Retorna todos os funcionários"
 *          content:
 *              application/json:
 *                schema:
 *                  type: "array"
 *                  items:
 *                      type: object
 *                      properties:
 *                        id:
 *                          type: string
 *                          example: 09c22351-bd96-46ec-8799-951d580f3e7d
 *                        datacad:
 *                          type: string
 *                          example: 2018-03-04
 *                        cargo:
 *                          type: string
 *                          example: Dev Jr
 *                        cpf:
 *                          type: string
 *                          example: 85235708709
 *                        nome:
 *                          type: string
 *                          example: Aaron Aaberg
 *                        ufnasc:
 *                          type: string
 *                          example: AP
 *                        salario:
 *                          type: string
 *                          example: $8,965.30
 *                        status:
 *                          type: string
 *                          example: ATIVO
 *                        created_at:
 *                          type: string
 *                          example: 2021-05-24T22:10:56.338Z
 *                        updated_at:
 *                          type: string
 *                          example: 2021-05-24T22:10:56.338Z
 *        "401":
 *          description: "JWT token is missing"
 *      security:
 *        - bearerAuth: []
 */
employeesRouter.post('/cargo', async (request, response) => {
  const cargo = request.body.cargo
  const employeeRepository = getCustomRepository(EmployeesRepository)
  const employee = await employeeRepository.findByCargo(cargo)

  return response.json(employee)
})

/**
 * @swagger
 *
 * /employees/data_de_cadastro:
 *  post:
 *      tags:
 *         - "Localizar por Data de Cadastro"
 *      summary: "Localizar por Data de Cadastro"
 *      description: "Localizar por Data de Cadastro"
 *      operationId: "dataDeCadastro"
 *      requestBody:
 *         required: true
 *         content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   date:
 *                     type: string
 *      responses:
 *        "200":
 *          description: "Retorna todos os funcionários"
 *          content:
 *              application/json:
 *                schema:
 *                  type: "array"
 *                  items:
 *                      type: object
 *                      properties:
 *                        id:
 *                          type: string
 *                          example: 09c22351-bd96-46ec-8799-951d580f3e7d
 *                        datacad:
 *                          type: string
 *                          example: 2018-03-04
 *                        cargo:
 *                          type: string
 *                          example: Dev Jr
 *                        cpf:
 *                          type: string
 *                          example: 85235708709
 *                        nome:
 *                          type: string
 *                          example: Aaron Aaberg
 *                        ufnasc:
 *                          type: string
 *                          example: AP
 *                        salario:
 *                          type: string
 *                          example: $8,965.30
 *                        status:
 *                          type: string
 *                          example: ATIVO
 *                        created_at:
 *                          type: string
 *                          example: 2021-05-24T22:10:56.338Z
 *                        updated_at:
 *                          type: string
 *                          example: 2021-05-24T22:10:56.338Z
 *        "401":
 *          description: "JWT token is missing"
 *      security:
 *        - bearerAuth: []
 */
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

/**
 * @swagger
 *
 * /employees/uf:
 *  post:
 *      tags:
 *         - "Localizar por UF de Nascimento"
 *      summary: "Localizar por UF de Nascimento"
 *      description: "Localizar por UF de Nascimento"
 *      operationId: "uf"
 *      requestBody:
 *         required: true
 *         content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   uf:
 *                     type: string
 *      responses:
 *        "200":
 *          description: "Retorna todos os funcionários"
 *          content:
 *              application/json:
 *                schema:
 *                  type: "array"
 *                  items:
 *                      type: object
 *                      properties:
 *                        id:
 *                          type: string
 *                          example: 09c22351-bd96-46ec-8799-951d580f3e7d
 *                        datacad:
 *                          type: string
 *                          example: 2018-03-04
 *                        cargo:
 *                          type: string
 *                          example: Dev Jr
 *                        cpf:
 *                          type: string
 *                          example: 85235708709
 *                        nome:
 *                          type: string
 *                          example: Aaron Aaberg
 *                        ufnasc:
 *                          type: string
 *                          example: AP
 *                        salario:
 *                          type: string
 *                          example: $8,965.30
 *                        status:
 *                          type: string
 *                          example: ATIVO
 *                        created_at:
 *                          type: string
 *                          example: 2021-05-24T22:10:56.338Z
 *                        updated_at:
 *                          type: string
 *                          example: 2021-05-24T22:10:56.338Z
 *        "401":
 *          description: "JWT token is missing"
 *      security:
 *        - bearerAuth: []
 */
employeesRouter.post('/uf', async (request, response) => {
  const uf = request.body.uf
  const employeeRepository = getCustomRepository(EmployeesRepository)
  const employee = await employeeRepository.findByUfNascimento(uf)

  return response.json(employee)
})

/**
 * @swagger
 *
 * /employees/faixa_salarial:
 *  post:
 *      tags:
 *         - "Localizar por Faixa Salarial"
 *      summary: "Localizar por Faixa Salarial"
 *      description: "Localizar por Faixa Salarial"
 *      operationId: "faixaSalarial"
 *      requestBody:
 *         required: true
 *         content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   faixaInicial:
 *                     type: number
 *                   faixaFinal:
 *                     type: number
 *      responses:
 *        "200":
 *          description: "Retorna todos os funcionários"
 *          content:
 *              application/json:
 *                schema:
 *                  type: "array"
 *                  items:
 *                      type: object
 *                      properties:
 *                        id:
 *                          type: string
 *                          example: 09c22351-bd96-46ec-8799-951d580f3e7d
 *                        datacad:
 *                          type: string
 *                          example: 2018-03-04
 *                        cargo:
 *                          type: string
 *                          example: Dev Jr
 *                        cpf:
 *                          type: string
 *                          example: 85235708709
 *                        nome:
 *                          type: string
 *                          example: Aaron Aaberg
 *                        ufnasc:
 *                          type: string
 *                          example: AP
 *                        salario:
 *                          type: string
 *                          example: $8,965.30
 *                        status:
 *                          type: string
 *                          example: ATIVO
 *                        created_at:
 *                          type: string
 *                          example: 2021-05-24T22:10:56.338Z
 *                        updated_at:
 *                          type: string
 *                          example: 2021-05-24T22:10:56.338Z
 *        "401":
 *          description: "JWT token is missing"
 *      security:
 *        - bearerAuth: []
 */
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

/**
 * @swagger
 *
 * /employees/status:
 *  post:
 *      tags:
 *         - "Localizar por Status"
 *      summary: "Localizar por Status"
 *      description: "Localizar por Status"
 *      operationId: "status"
 *      requestBody:
 *         required: true
 *         content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *      responses:
 *        "200":
 *          description: "Retorna todos os funcionários"
 *          content:
 *              application/json:
 *                schema:
 *                  type: "array"
 *                  items:
 *                      type: object
 *                      properties:
 *                        id:
 *                          type: string
 *                          example: 09c22351-bd96-46ec-8799-951d580f3e7d
 *                        datacad:
 *                          type: string
 *                          example: 2018-03-04
 *                        cargo:
 *                          type: string
 *                          example: Dev Jr
 *                        cpf:
 *                          type: string
 *                          example: 85235708709
 *                        nome:
 *                          type: string
 *                          example: Aaron Aaberg
 *                        ufnasc:
 *                          type: string
 *                          example: AP
 *                        salario:
 *                          type: string
 *                          example: $8,965.30
 *                        status:
 *                          type: string
 *                          example: ATIVO
 *                        created_at:
 *                          type: string
 *                          example: 2021-05-24T22:10:56.338Z
 *                        updated_at:
 *                          type: string
 *                          example: 2021-05-24T22:10:56.338Z
 *        "401":
 *          description: "JWT token is missing"
 *      security:
 *        - bearerAuth: []
 */
employeesRouter.post('/status', async (request, response) => {
  const status = request.body.status
  const employeeRepository = getCustomRepository(EmployeesRepository)
  const employee = await employeeRepository.findByStatus(status)

  return response.json(employee)
})

/**
 * @swagger
 *
 * /employees:
 *  post:
 *      tags:
 *         - "Incluir novo funcionário"
 *      summary: "Incluir novo funcionário"
 *      description: "Incluir novo funcionário"
 *      operationId: "incluirNovoFuncionário"
 *      requestBody:
 *         required: true
 *         content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   nome:
 *                     type: string
 *                   cpf:
 *                     type: string
 *                   cargo:
 *                     type: string
 *                   dataDeCadastro:
 *                     type: string
 *                   ufDeNascimento:
 *                     type: string
 *                   salario:
 *                     type: string
 *                   status:
 *                     type: string
 *      responses:
 *        "201":
 *          description: "Cadastra/Atualiza o funcionário."
 *          content:
 *              application/json:
 *                schema:
 *                  type: "array"
 *                  items:
 *                      type: object
 *                      properties:
 *                        id:
 *                          type: string
 *                          example: 09c22351-bd96-46ec-8799-951d580f3e7d
 *                        datacad:
 *                          type: string
 *                          example: 2018-03-04
 *                        cargo:
 *                          type: string
 *                          example: Dev Jr
 *                        cpf:
 *                          type: string
 *                          example: 85235708709
 *                        nome:
 *                          type: string
 *                          example: Aaron Aaberg
 *                        ufnasc:
 *                          type: string
 *                          example: AP
 *                        salario:
 *                          type: string
 *                          example: $8,965.30
 *                        status:
 *                          type: string
 *                          example: ATIVO
 *                        created_at:
 *                          type: string
 *                          example: 2021-05-24T22:10:56.338Z
 *                        updated_at:
 *                          type: string
 *                          example: 2021-05-24T22:10:56.338Z
 *        "401":
 *          description: "JWT token is missing"
 *      security:
 *        - bearerAuth: []
 */
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

    return response.status(201).json(employee)
  } catch (err) {
    return response.status(400).json({ error: err.message })
  }
})

/**
 * @swagger
 *
 *  paths:
 *    /employees/{cpf}:
 *     delete:
 *      tags:
 *         - "Remover por CPF"
 *      summary: "Remover por CPF"
 *      description: "Remover por CPF"
 *      operationId: "removerPorCpf"
 *      parameters:
 *       - in: path
 *         name: cpf
 *         schema:
 *           type: number
 *         required: true
 *         description: CPF a ser removido.
 *      responses:
 *        "202":
 *          description: "Remove o funcionário."
 *          content:
 *              application/json:
 *                schema:
 *                    type: object
 *                    properties:
 *                       status:
 *                          type: string
 *                          example: Employee removed.
 *        "401":
 *          description: "JWT token is missing"
 *      security:
 *        - bearerAuth: []
 */
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
