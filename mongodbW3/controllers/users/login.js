const { findOne, updateToken } = require('../../service/users')
const createError = require('http-errors')

const jwt = require('jsonwebtoken')
require('dotenv').config()
const { SECRET_KEY } = process.env

const login = async (req, res) => {
  const { email, password } = req.body
  // console.log(email, password)

  const user = await findOne({ email })

  if (!user || !user.validPassword(password)) {
    return res.status(401).json({
      status: 'error',
      code: 401,
      message: 'Email or password error',
      data: 'Unauthorized',
    })
  }

  if (!user.verify) {
    throw createError(400, 'Not confirmed email ')
  }
  const id = user._id
  const payload = { id }

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' })

  await updateToken(id, token)
  const { subscription, avatarURL } = user
  if (token) {
    res.json({
      status: 'success',
      code: 200,
      data: {
        user: {
          token,
          email,
          subscription,
          avatarURL,
        },
      },
    })
  }
}

module.exports = login
