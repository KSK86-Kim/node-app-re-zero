const { findOne, update } = require('../../service/users')
const { NotFound } = require('http-errors')

const verify = async(req, res) => {
  const { verificationToken } = req.params
  console.log(verificationToken)

  const user = await findOne({ verificationToken })
  if (!user) {
    throw new NotFound('User not found')
  }
  await update(user._id, { verifyToken: null, verify: true })

  res.send('<h2Email confirmed>')
}

module.exports = verify
