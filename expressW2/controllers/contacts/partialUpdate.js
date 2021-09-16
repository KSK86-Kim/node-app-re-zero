const { putContactSchema } = require('../../validation/contact')
const { partialUpdateContactById } = require('../../service/contacts')

const partialUpdate = async(req, res, next) => {
  const { error } = putContactSchema.validate(req.body)
  if (error) {
    return res.status(400).json({
      status: 'error',
      code: '400',
      message: error.message
    })
  }
  const { contactId } = req.params
  const updateContact = await partialUpdateContactById(contactId, req.body)

  if (!updateContact) {
    return res.status(404).json({
      status: 'error',
      code: '404',
      message: `Contact with id: { ${contactId} } not found`
    })
  }
  res.json({
    updateContact
  })
}
module.exports = partialUpdate
