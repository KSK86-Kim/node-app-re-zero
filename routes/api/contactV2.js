const routes = require('express').Router()

const { controllerWrapper, objectCheck } = require('../../middlewares/')

const ctrlContacts = require('../../ctrl/contactsV2')

routes
  .get('/test', objectCheck(), controllerWrapper(ctrlContacts.test))
  .get('/', controllerWrapper(ctrlContacts.getAll))
  .post('/', controllerWrapper(ctrlContacts.add))

routes
  .get('/:contactId', controllerWrapper(ctrlContacts.getById))
  .delete('/:contactId', controllerWrapper(ctrlContacts.delById))
  .put('/:contactId', objectCheck(), ctrlContacts.update)
  .patch('/:contactId', objectCheck(), controllerWrapper(ctrlContacts.partialUpdate))
  .patch('/:contactId/favorite', objectCheck(), controllerWrapper(ctrlContacts.updateStatus))

module.exports = routes
