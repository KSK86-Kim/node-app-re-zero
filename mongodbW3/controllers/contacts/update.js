const { updateContactById } = require('../../service/contacts')

const update = async(req, res) => {
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

module.exports = update
