import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity('employees')
class Employees {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column('date')
  datacad: Date

  @Column('varchar')
  cargo: string

  @Column('bigint')
  cpf: number

  @Column('varchar')
  nome: string

  @Column('varchar')
  ufnasc: string

  @Column('money')
  salario: number

  @Column('varchar')
  status: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default Employees
