import { Router, Request, Response } from 'express'
import multer from 'multer'
import uploadConfig from '../config/upload'

import CreateUserService from '../services/CreateUserService'
import UpdateUserAvatarService from '../services/UpdateUserAvatarService'

import ensureAuthenticated from '../middlewares/ensureAuthenticated'

import AppError from '../errors/AppError'

const usersRouter = Router()
const upload = multer(uploadConfig)

/**
 * @swagger
 *
 * /users:
 *  post:
 *      tags:
 *         - "Cadastrar novo usuário"
 *      summary: "Cadastrar novo usuário"
 *      description: "Cadastrar novo usuário"
 *      operationId: "novoUsuario"
 *      requestBody:
 *         required: true
 *         content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 *                   password:
 *                     type: string
 *      responses:
 *        "200":
 *          description: "Retorna o usuário criado."
 *          content:
 *              application/json:
 *                schema:
 *                  type: "array"
 *                  items:
 *                      type: object
 *                      properties:
 *                         name:
 *                           type: string
 *                           example: Erick
 *                         email:
 *                           type: string
 *                           example: erick@challenge.com.br
 *                         id:
 *                           type: string
 *                           example: ca2f9f27-dfd5-4f61-ad3d-c3403b589ada
 *                         created_at:
 *                           type: string
 *                           example: 2021-05-25T01:20:51.687Z
 *                         updated_at:
 *                           type: string
 *                           example: 2021-05-25T01:20:51.687Z
 *        "401":
 *          description: "JWT token is missing"
 *        "400":
 *          description: "Email address already used."
 *      security:
 *        - bearerAuth: []
 */
usersRouter.post('/', async (request, response) => {
  const { name, email, password } = request.body

  if (!name || !email || !password) {
    throw new AppError(
      'Campos Nome, e-mail e senha devem ser preenchidos.',
      400,
    )
  }

  const createUser = new CreateUserService()

  const user = await createUser.execute({
    name,
    email,
    password,
  })

  delete user.password

  return response.json(user)
})

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  async (request, response) => {
    const updateUserAvatar = new UpdateUserAvatarService()

    const user = await updateUserAvatar.execute({
      user_id: request.user.id,
      avatarFileName: request.file.filename,
    })

    delete user.password

    return response.json(user)
  },
)

export default usersRouter
