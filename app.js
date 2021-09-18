const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const helmet = require('helmet')

const expressApi = require('./expressW2/routes/api')
const mongodbAPI = require('./mongodbW3/routes/api')

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(helmet())
app.use(express.json())

const REQUESTS = {
  expressContacts: {
    path: '/api/v1/contacts',
    message: 'Путь на котором находится 2-e дз'
  },
  mongodbContacts: {
    path: '/api/v2/contacts',
    message: 'Путь на котором будет находиться 3-6 дз'
  },
  mongodbUsers: {
    path: '/api/v2/users',
    message: 'Путь на котором будет находиться 4-6 дз'
  },
}

app.use(REQUESTS.expressContacts.path, expressApi.routesContacts)
app.use(REQUESTS.mongodbContacts.path, mongodbAPI.routesContacts)
app.use(REQUESTS.mongodbUsers.path, mongodbAPI.routesUsers)

app.use((req, res) => {
  const { originalUrl, method } = req
  res.status(404).json({
    status: 'error',
    code: 404,
    method,
    message: `Not found route on the url: { ${originalUrl} }`
  })
})

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err
  res.status(status).json({
    status: 'error',
    code: status,
    message
  })
})

module.exports = { app, REQUESTS }
