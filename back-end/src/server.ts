import 'reflect-metadata'
import path from 'path'

import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors'

import cors from 'cors'
import routes from './routes'
import uploadConfig from './config/upload'

import AppError from './errors/AppError'

import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

import './database'

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Ivory Technical Challenge',
      version: '1.0.0',
    },
  },
  apis: [path.join(__dirname, '/routes/*.routes.ts')],
}

const specs = swaggerJSDoc(options)

const app = express()

app.use(cors())
app.use(express.json())
app.use('/files', express.static(uploadConfig.directory))
app.use(routes)

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: 'error',
        message: err.message,
      })
    }

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    })
  },
)

app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs))

app.listen(3333, () => {
  console.log('Server started on port 3333!')
})
