const { updateContactById } = require('../../service/contactsV2')
const { joiUpdateStatusContactSchema } = require('../../models/contact')

const updateStatus = async(req, res) => {
  const { error } = joiUpdateStatusContactSchema.validate(req.body)
  if (error) {
    return res.status(400).json({
      status: 'error',
      code: '400',
      message: error.message
    })
  }
  const { contactId } = req.params
  console.log(contactId)

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

module.exports = updateStatus
