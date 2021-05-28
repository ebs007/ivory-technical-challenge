import Employee from '../models/Employee'
import {
  EntityRepository,
  Repository,
  Between,
  ILike,
  getRepository,
  getManager,
} from 'typeorm'

@EntityRepository(Employee)
class EmployeesRepository extends Repository<Employee> {
  public async findByNome(name: string): Promise<Employee[] | null> {
    const findEmployee = await this.find({
      nome: ILike(`%${name}%`),
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
      cargo: ILike(`%${cargo}%`),
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
  public async findByUfNascimento(uf: string): Promise<any | null> {
    const findEmployee = await getManager().query(
      `select ufnasc as Uf,count(*) from employees e where e.ufnasc ilike '%${uf}%' group by e.ufnasc`,
    )

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
      status: ILike(`%${status}%`),
    })

    return findEmployee || null
  }
}

export default EmployeesRepository
