import FakeCreateEmployeeService from '../repositories/fakes/FakeEmployeeRepository'

describe('CreateEmployeeService', () => {
  it('should be able to create a new employee', async () => {
    const fakeCreateEmployeeService = new FakeCreateEmployeeService()

    const employee = await fakeCreateEmployeeService.createEmployee({
      dataCad: new Date(),
      cargo: 'Dev Sr',
      cpf: 85235708709,
      nome: 'Aaron Aaberg',
      ufNasc: 'AP',
      salario: 896530,
      status: 'ATIVO',
    })

    expect(employee).toHaveProperty('id')
    expect(employee?.cargo).toBe('Dev Sr')
  })
})
