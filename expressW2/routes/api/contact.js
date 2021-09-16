// const express = require('express')
// const router = express.Router()
const routes = require('express').Router()

const { controllerWrapper } = require('../../../middlewares/')
const ctrlContacts = require('../../controllers/contacts')

routes
  .get('/', controllerWrapper(ctrlContacts.getAll))
  .post('/', controllerWrapper(ctrlContacts.add))

routes
  .get('/:contactId', controllerWrapper(ctrlContacts.getById))
  .delete('/:contactId', controllerWrapper(ctrlContacts.delById))
  .patch('/:contactId', controllerWrapper(ctrlContacts.partialUpdate))
  .put('/:contactId', controllerWrapper(ctrlContacts.update))

module.exports = routes
