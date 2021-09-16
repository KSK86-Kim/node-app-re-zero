const routes = require('express').Router()

const {
  controllerWrapper,
  controllerWrapperUpdate,
  objectCheck,
} = require('../../../middlewares/')

const {
  joiNewContactSchema,
  joiUpdateContactSchema,
  joiUpdateStatusContactSchema,
} = require('../../models/contact')

const ctrlContacts = require('../../controllers/contacts')

routes
  .get('/test', objectCheck(), controllerWrapperUpdate(ctrlContacts.test, joiNewContactSchema))
  .get('/', controllerWrapper(ctrlContacts.getAll))
  .post('/', objectCheck(), controllerWrapperUpdate(ctrlContacts.add, joiNewContactSchema))

routes
  .get('/:contactId', controllerWrapper(ctrlContacts.getById))
  .delete('/:contactId', controllerWrapper(ctrlContacts.delById))
  .put('/:contactId', objectCheck(), controllerWrapperUpdate(ctrlContacts.update, joiNewContactSchema))
  .patch('/:contactId', objectCheck(), controllerWrapperUpdate(ctrlContacts.update, joiUpdateContactSchema))
  .patch('/:contactId/favorite', objectCheck(), controllerWrapperUpdate(ctrlContacts.update, joiUpdateStatusContactSchema))

module.exports = routes
