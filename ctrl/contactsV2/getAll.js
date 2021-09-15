const { listContacts } = require('../../service/contactsV2')

const getAllContacts = async (req, res, next) => {
  const allContacts = await listContacts()
  res.json({
    status: 'success',
    code: 200,
    data: {
      result: { ...allContacts },
    },
  })
}

module.exports = getAllContacts
