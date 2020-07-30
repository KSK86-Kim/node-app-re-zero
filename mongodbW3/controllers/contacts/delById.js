const { removeContact, listContacts } = require('../../service/contacts')
const { BadRequest } = require('http-errors')

const delById = async(req, res, next) => {
  const { id: userId } = req.user
  const { contactId } = req.params
  const options = req.query

  const allContacts = await listContacts(userId, options)
  const contacts = allContacts.contacts
  if (contacts.map((item) => String(item.id)).includes(contactId)) {
    const deleteContact = await removeContact(contactId, userId)
    res.json({
      code: '204',
      deleteContact
    })
  }
  throw new BadRequest(`Contact with id: { ${contactId} } not foud`)
}

module.exports = delById
