const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const contactsV1Router = require('./routes/api/contactV1')
const contactsV2Router = require('./routes/api/contactV2')

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())

const REQUESTS = {
  contactsV1: {
    path: '/api/v1/contacts',
    message: 'Путь на котором находится 2 дз'
  },
  contactsV2: {
    path: '/api/v2/contacts',
    message: 'Путь на котором будет находиться 3-6 дз'
  },
}

app.use(REQUESTS.contactsV1.path, contactsV1Router)
app.use(REQUESTS.contactsV2.path, contactsV2Router)

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err
  res.status(status).json({ message })
})

module.exports = { app, REQUESTS }
