const { removeContact } = require('../../service/contacts')
const { BadRequest } = require('http-errors')

const delById = async(req, res, next) => {
  const { contactId } = req.params
  const deleteContact = await removeContact(contactId)
  if (!deleteContact) {
    throw new BadRequest(`Contact with id: { ${contactId} } not foud`)
  }
  res.json({
    code: '204',
    deleteContact
  })
}

module.exports = delById
