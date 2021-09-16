const { removeContact } = require('../../service/contacts')

const delById = async(req, res, next) => {
  const { contactId } = req.params
  const deleteContact = await removeContact(contactId)
  if (!deleteContact) {
    return res.status(404).json({
      status: 'error',
      code: '404',
      message: `Contact with id: { ${contactId} } not found`
    })
  }
  res.json({
    code: '204',
    deleteContact
  })
}

module.exports = delById
