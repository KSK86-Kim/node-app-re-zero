const routes = require('express').Router()

const {
  controllerWrapper,
  objectCheck,
} = require('../../../middlewares/')

const {
  joiNewContactSchema,
  joiUpdateContactSchema,
  joiUpdateStatusContactSchema,
} = require('../../models/contact')

const ctrlContacts = require('../../controllers/contacts')

routes
  .get('/test',
    objectCheck(joiUpdateContactSchema),
    controllerWrapper(ctrlContacts.test))

  .get('/',
    controllerWrapper(ctrlContacts.getAll))
  .post('/',
    objectCheck(joiNewContactSchema),
    controllerWrapper(ctrlContacts.add))

routes
  .get('/test/:id',
    objectCheck(joiUpdateContactSchema),
    controllerWrapper(ctrlContacts.testId))

  .get('/:contactId',
    controllerWrapper(ctrlContacts.getById))
  .delete('/:contactId',
    controllerWrapper(ctrlContacts.delById))
  .put('/:contactId',
    objectCheck(joiNewContactSchema),
    controllerWrapper(ctrlContacts.update))
  .patch('/:contactId',
    objectCheck(joiUpdateContactSchema),
    controllerWrapper(ctrlContacts.update))

  .patch('/:contactId/favorite',
    objectCheck(joiUpdateStatusContactSchema),
    controllerWrapper(ctrlContacts.update))

module.exports = routes
