import { Router } from 'express'
import employeesRouter from './employees.routes'
import usersRouter from './users.routes'
import sessionsRouter from './sessions.routes'

const routes = Router()

routes.use('/employees', employeesRouter)
routes.use('/users', usersRouter)
routes.use('/sessions', sessionsRouter)

export default routes
