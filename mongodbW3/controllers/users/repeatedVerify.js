const { findOne } = require('../../service/users')
const { sendMail } = require('../../../utils')

require('dotenv').config()
const { HOST_SERVER } = process.env

const repeatedVerify = async(req, res) => {
  const { email } = req.body
  console.log(email)

  const user = await findOne({ email })
  console.log(user)

  if (!user.verify) {
    return res.status(400).json({
      status: 'error',
      code: 400,
      message: 'Verification has already been passed',
    })
  }
  const htmlEmail = `
  <p>Welcome to System Contacts! We're very excited to have you on board.
  <br> To get started with System Contacts, please click here: 
  <button><a href="${HOST_SERVER}api/v2/users/verify/${user.verifyToken}">link</a></button></p>`

  const newEmail = {
    to: email,
    subject: 'Registration on the website',
    html: htmlEmail
  }

  await sendMail(newEmail)
  res.json({
    status: 'success',
    code: 200,
    message: 'Verification email sent',
  })
}

module.exports = repeatedVerify
