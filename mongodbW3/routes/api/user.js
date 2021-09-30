const routes = require('express').Router()
const { controllerWrapper, objectCheck, authorization, upload } = require('../../../middlewares')
// const test = require('../../controllers/contacts/test')
const ctrlUser = require('../../controllers/users')
const {
  joiNewUserSchema,
  // joiUpdatePasswordUserSchema,
  joiUpdateSubscriptiUserSchema,
  joiRepeatedVerifySchema
} = require('../../models/user')

// routes
// .get('/test', controllerWrapper(test))

routes
  .post('/signup',
    objectCheck(joiNewUserSchema),
    controllerWrapper(ctrlUser.reg))
  .post('/login',
    objectCheck(joiNewUserSchema),
    controllerWrapper(ctrlUser.login))
  .post('/logout',
    authorization,
    controllerWrapper(ctrlUser.logout))
  .post('/verify',
    objectCheck(joiRepeatedVerifySchema),
    controllerWrapper(ctrlUser.repeatedVerify))

  .get('/current',
    authorization,
    controllerWrapper(ctrlUser.current))

  .patch('/subscription',
    authorization,
    objectCheck(joiUpdateSubscriptiUserSchema),
    ctrlUser.updateSubscription)

  .patch('/avatars',
    authorization,
    upload.single('image'),
    controllerWrapper(ctrlUser.updateImg))

routes
  .get('/verify/:verificationToken', controllerWrapper(ctrlUser.verify))

module.exports = routes
