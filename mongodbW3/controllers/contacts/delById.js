const { removeContact, listContacts } = require('../../service/contacts')
const { BadRequest } = require('http-errors')

const delById = async(req, res, next) => {
  const { id: userId } = req.user
  const { contactId } = req.params
  const options = req.query

  const allContacts = await listContacts(userId, options)
  const contacts = allContacts.contacts
  console.log(contacts.map((item) => String(item.id)).includes(contactId))

  if (contacts.map((item) => String(item.id)).includes(contactId)) {
    await removeContact({ userId, contactId })
    res.json({
      code: '204',
      message: `contact with id: { ${contactId} } deleted`,
    })
  } else {
    throw new BadRequest(`Contact with id: { ${contactId} } not foud`)
  }
}

module.exports = delById
