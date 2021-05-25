import { getCustomRepository } from 'typeorm'

import EmployeeRepository from '../repositories/EmployeeRepository'

interface Request {
  cpf: number
}

class RemoveEmployeeService {
  public async execute({ cpf }: Request): Promise<void> {
    const employeesRepository = getCustomRepository(EmployeeRepository)

    const findEmployeeByCpf = await employeesRepository.findOne({
      where: { cpf: cpf },
    })

    if (!findEmployeeByCpf) {
      throw Error('This employee do not exist.')
    }

    await employeesRepository.remove(findEmployeeByCpf)
  }
}

export default RemoveEmployeeService
