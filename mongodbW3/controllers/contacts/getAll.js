const { listContacts } = require('../../service/contacts')

const getAllContacts = async (req, res, next) => {
  const { id: userId } = req.user
  const options = req.query

  const allContacts = await listContacts(userId, options)
  res.json({
    status: 'success',
    code: 200,
    data: {
      result: { ...allContacts },
    },
  })
}

module.exports = getAllContacts
