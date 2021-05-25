import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateEmployees1621864136220 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'employees',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'datacad',
            type: 'date',
          },
          {
            name: 'cargo',
            type: 'varchar',
          },
          {
            name: 'cpf',
            type: 'bigint',
          },
          {
            name: 'nome',
            type: 'character varying',
          },
          {
            name: 'ufnasc',
            type: 'character varying',
          },
          {
            name: 'salario',
            type: 'money',
          },
          {
            name: 'status',
            type: 'character varying',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('employees')
  }
}
