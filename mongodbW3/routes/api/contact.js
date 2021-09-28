const routes = require('express').Router()

const {
  controllerWrapper,
  objectCheck,
  authorization,
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
    authorization,
    controllerWrapper(ctrlContacts.getAll))
  .post('/',
    authorization,
    objectCheck(joiNewContactSchema),
    controllerWrapper(ctrlContacts.add))

routes
  .get('/test/:id',
    objectCheck(joiUpdateContactSchema),
    controllerWrapper(ctrlContacts.testId))

  .get('/:contactId',
    authorization,
    controllerWrapper(ctrlContacts.getById))
  .delete('/:contactId',
    authorization,
    controllerWrapper(ctrlContacts.delById))
  .put('/:contactId',
    authorization,
    objectCheck(joiNewContactSchema),
    controllerWrapper(ctrlContacts.update))
  .patch('/:contactId',
    authorization,
    objectCheck(joiUpdateContactSchema),
    controllerWrapper(ctrlContacts.update))

  .patch('/:contactId/favorite',
    authorization,
    objectCheck(joiUpdateStatusContactSchema),
    controllerWrapper(ctrlContacts.update))

module.exports = routes
