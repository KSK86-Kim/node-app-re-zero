const { getContactById } = require('../../service/contactsV1')

const getById = async(req, res, next) => {
  const { contactId } = req.params

  const contact = await getContactById(contactId)
  if (!contact) {
    return res.status(404).json({
      status: 'error',
      code: '404',
      message: 'Not found'
    })
  }
  res.json({
    contact
  })
}

module.exports = getById
