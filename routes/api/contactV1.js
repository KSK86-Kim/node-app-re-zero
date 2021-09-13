// const express = require('express')
// const router = express.Router()
const routes = require('express').Router()

const { controllerWrapper } = require('../../middlewares/')
const ctrlContacts = require('../../ctrl/contactsV1')

routes.get('/', controllerWrapper(ctrlContacts.getAll))

routes.get('/:contactId', controllerWrapper(ctrlContacts.getById))

routes.post('/', controllerWrapper(ctrlContacts.add))

routes.delete('/:contactId', controllerWrapper(ctrlContacts.delById))

routes.patch('/:contactId', controllerWrapper(ctrlContacts.partialUpdate))

routes.put('/:contactId', controllerWrapper(ctrlContacts.update))

module.exports = routes
