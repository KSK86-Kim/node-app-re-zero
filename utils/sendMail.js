const nodemailer = require('nodemailer')
const { InternalServerError } = require('http-errors')
require('dotenv').config()

const { META_EMAIL, META_PASSWORD } = process.env

const nodemailerConfig = {
  host: 'smtp.meta.ua',
  port: 465,
  secure: true,
  auth: {
    user: META_EMAIL,
    pass: META_PASSWORD
  }
}

const transporter = nodemailer.createTransport(nodemailerConfig)

const sendMail = async(data) => {
  try {
    const mail = { ...data, from: META_EMAIL }
    await transporter.sendMail(mail)
  } catch (error) {
    throw new InternalServerError(error.message)
  }
}

module.exports = sendMail
