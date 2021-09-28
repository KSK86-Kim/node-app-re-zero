const { updateToken } = require('../../service/users')

const logout = async (req, res, next) => {
  const { id: userId } = req.user
  await updateToken(userId, null)
  return res.json({
    status: 'success',
    code: 204,
    data: 'No Content',
  })
}

module.exports = logout
