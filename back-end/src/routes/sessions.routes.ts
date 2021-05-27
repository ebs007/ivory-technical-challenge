import { Router } from 'express'

import AuthenticateUserService from '../services/AuthenticateUserService'

import AppError from '../errors/AppError'

const sessionsRouter = Router()

/**
 * @swagger
 *
 * /sessions:
 *  post:
 *      tags:
 *         - "Login"
 *      summary: "Login"
 *      description: "Login"
 *      operationId: "login"
 *      requestBody:
 *         required: true
 *         content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   email:
 *                     type: string
 *                   password:
 *                     type: string
 *      responses:
 *        "200":
 *          description: "Retorna o usuário logado."
 *          content:
 *              application/json:
 *                  schema:
 *                     type: object
 *                     properties:
 *                        user:
 *                           type: object
 *                           properties:
 *                              id:
 *                                type: string
 *                                example: ca2f9f27-dfd5-4f61-ad3d-c3403b589ada
 *                              name:
 *                                type: string
 *                                example: Erick
 *                              email:
 *                                type: string
 *                                example: erick@challenge.com.br
 *                              avatar:
 *                                type: string
 *                                example: null
 *                              created_at:
 *                                type: string
 *                                example: 2021-05-25T01:20:51.687Z
 *                              updated_at:
 *                                type: string
 *                                example: 2021-05-25T01:20:51.687Z
 *                        token:
 *                          type: string
 *                          example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MjIxNTI4ODgsImV4cCI6MTYyMjIzOTI4OCwic3ViIjoiY2EyZjlmMjctZGZkNS00ZjYxLWFkM2QtYzM0MDNiNTg5YWRhIn0.uARagyIqpSVI6m_5eJ2SqPjD2_mpg39TMxfwkPaWXB8
 *
 *        "400":
 *          description: "JWT token is missing"
 *        "401":
 *          description: "Email ou senha inválidos."
 *      security:
 *        - bearerAuth: []
 */
sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body

  if (!email || !password) {
    throw new AppError('Campos E-mail e senha devem ser preenchidos.', 400)
  }

  const authenticateUser = new AuthenticateUserService()

  const { user, token } = await authenticateUser.execute({
    email,
    password,
  })

  delete user.password

  return response.json({ user, token })
})

export default sessionsRouter
