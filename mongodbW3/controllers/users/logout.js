const { updateToken } = require('../../service/users')

const logout = async (req, res, next) => {
  const id = req.user.id
  await updateToken(id, null)
  return res.json({
    status: 'success',
    code: 204,
    data: 'No Content',
  })
}

module.exports = logout
