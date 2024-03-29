// const { users: service } = require('../../service/index')
const { findOne, create } = require('../../service/users')
const { Conflict } = require('http-errors')

const reg = async (req, res, next) => {
  const { email } = req.body
  const user = await findOne({ email })

  if (user) {
    throw new Conflict('Email in use')
  }

  const newUser = await create({
    ...req.body,
  })

  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      id: newUser._id,
      email: newUser.email,
    },
  })
}

module.exports = reg
