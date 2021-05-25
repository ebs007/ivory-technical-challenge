import { getCustomRepository } from 'typeorm'

import Employee from '../models/Employee'
import EmployeeRepository from '../repositories/EmployeeRepository'

interface Request {
  dataCad: Date
  cargo: string
  cpf: number
  nome: string
  ufNasc: string
  salario: number
  status: string
}

class CreateOrUpdateEmployeeService {
  public async execute({
    dataCad,
    cargo,
    cpf,
    nome,
    ufNasc,
    salario,
    status,
  }: Request): Promise<Employee> {
    const employeesRepository = getCustomRepository(EmployeeRepository)

    let employee

    const findEmployeeByCpf = await employeesRepository.findOne({
      where: { cpf: cpf },
    })

    if (findEmployeeByCpf) {
      findEmployeeByCpf.datacad = dataCad
      findEmployeeByCpf.cargo = cargo
      findEmployeeByCpf.nome = nome
      findEmployeeByCpf.ufnasc = ufNasc
      findEmployeeByCpf.salario = salario
      ;(findEmployeeByCpf.status = status), (employee = findEmployeeByCpf)
    } else {
      employee = employeesRepository.create({
        datacad: dataCad,
        cargo: cargo,
        cpf: cpf,
        nome: nome,
        ufnasc: ufNasc,
        salario: salario,
        status: status,
      })
    }

    await employeesRepository.save(employee)

    return employee
  }
}

export default CreateOrUpdateEmployeeService
