
const objectCheck = (joiSchema) => {
  return async (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({
        status: 'error',
        code: 400,
        message: 'missing refreshable object',
      })
    }
    const { error } = joiSchema.validate(req.body)
    // console.log(error)

    // if (error.message.includes('"name" is required')) {
    //   return res.json({
    //     data: 'все ок'
    //   })
    // }

    if (error) {
      const errorMessageJoi = error.message
      let newErrorMessage

      switch (errorMessageJoi) {
        case '"name" is required':
          newErrorMessage = 'Name is required and must contain at least two letters and'
          break
        case '"email" is required':
          newErrorMessage = 'Email is required'
          break
        case '"phone" is required':
          newErrorMessage = 'Phone is required'
          break
        case '"favorite" is required':
          newErrorMessage = 'Favorite required like a false or true'
          break
        default:
          newErrorMessage = errorMessageJoi
          break
      }
      return res.status(400).json({
        status: 'error',
        code: 400,
        message: newErrorMessage
      })
    }
    next()
  }
}

module.exports = objectCheck
