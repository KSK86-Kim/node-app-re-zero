const { updateContactById, listContacts } = require('../../service/contacts')
const { BadRequest } = require('http-errors')

const update = async(req, res) => {
  const { contactId } = req.params
  const userId = req.user.id
  const upInfo = req.body

  const allContacts = await listContacts(userId, req.query)
  const contacts = allContacts.contacts

  if (contacts.map((item) => String(item.id)).includes(contactId)) {
    const updatedContact = await updateContactById(
      { userId, contactId, upInfo }
    )
    return res.json({
      status: 'success',
      code: 200,
      data: {
        result: updatedContact,
      },
    })
  } else {
    throw new BadRequest(`Contact with id: { ${contactId} } not foud`)
  }
}

module.exports = update
