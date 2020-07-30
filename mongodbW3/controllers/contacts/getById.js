const { getContactById, listContacts } = require('../../service/contacts')
const { BadRequest } = require('http-errors')

const getById = async(req, res, next) => {
  const { id: userId } = req.user
  const { contactId } = req.params
  const options = req.query

  const allContacts = await listContacts(userId, options)
  const contacts = allContacts.contacts

  if (contacts.map((item) => String(item.id)).includes(contactId)) {
    const selectContact = await getContactById(contactId, userId)
    res.json({
      statusL: 'success',
      code: '200',
      data: {
        sesult: selectContact
      }
    })
  }

  throw new BadRequest(`Contact with id: { ${contactId} } not foud`)
}

module.exports = getById
