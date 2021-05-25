import Employee from '../models/Employee'
import { EntityRepository, Repository, Between } from 'typeorm'

@EntityRepository(Employee)
class EmployeesRepository extends Repository<Employee> {
  public async findByNome(name: string): Promise<Employee[] | null> {
    const findEmployee = await this.find({
      where: { nome: name },
    })

    return findEmployee || null
  }
  public async findByCpf(cpf: number): Promise<Employee[] | null> {
    const findEmployee = await this.find({
      where: { cpf: cpf },
    })

    return findEmployee || null
  }
  public async findByCargo(cargo: string): Promise<Employee[] | null> {
    const findEmployee = await this.find({
      where: { cargo: cargo },
    })

    return findEmployee || null
  }
  public async findByDateRegister(
    dateRegister: Date,
  ): Promise<Employee[] | null> {
    const findEmployee = await this.find({
      where: { datacad: dateRegister },
    })

    return findEmployee || null
  }
  public async findByUfNascimento(
    uf: string,
  ): Promise<[Employee[], number] | null> {
    const findEmployee = await this.findAndCount({
      where: { ufnasc: uf },
    })

    return findEmployee || null
  }
  public async findByFaixaSalarial(
    faixaInical: number,
    faixaFinal: number,
  ): Promise<Employee[] | null> {
    const findEmployee = await this.find({
      salario: Between(faixaInical, faixaFinal),
    })

    return findEmployee || null
  }
  public async findByStatus(status: string): Promise<Employee[] | null> {
    const findEmployee = await this.find({
      where: { status: status },
    })

    return findEmployee || null
  }
}

export default EmployeesRepository
