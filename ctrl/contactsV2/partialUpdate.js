const { joiUpdateContactSchema } = require('../../models/contact')
const { updateContactById } = require('../../service/contactsV2')

const partialUpdate = async(req, res, next) => {
  const { error } = joiUpdateContactSchema.validate(req.body)
  if (error) {
    return res.status(400).json({
      status: 'error',
      code: '400',
      message: error.message
    })
  }
  const { contactId } = req.params
  const updatedContact = await updateContactById(contactId, req.body)

  if (!updatedContact) {
    return res.status(404).json({
      status: 'error',
      code: '404',
      message: `Contact with id: { ${contactId} } not found`
    })
  }
  return res.json({
    status: 'success',
    code: 200,
    data: {
      result: updatedContact,
    },
  })
}
module.exports = partialUpdate
