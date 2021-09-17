const { updateContactById } = require('../../service/contacts')
const { BadRequest } = require('http-errors')

const update = async(req, res) => {
  const { contactId } = req.params

  const updatedContact = await updateContactById(contactId, req.body)

  if (!updatedContact) {
    throw new BadRequest(`Contact with id: { ${contactId} } not foud`)
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
