
const { BadRequest } = require('http-errors')

const objectCheck = (joiSchema) => {
  return async (req, res, next) => {
    try {
      if (Object.keys(req.body).length === 0) {
        throw new BadRequest('missing refreshable object')
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
        throw new BadRequest(errorMessageJoi)

        // оставил себе пример. За комментировал после того как я узнал что joi есть функция .error()
        // let newErrorMessage
        // switch (errorMessageJoi) {
        //   case '"name" is required':
        //     newErrorMessage = 'Name is required and must contain at least two letters'
        //     break
        //   case '"email" is required':
        //     newErrorMessage = 'Email is required'
        //     break
        //   case '"phone" is required':
        //     newErrorMessage = 'Phone is required'
        //     break
        //   case '"favorite" is required':
        //     newErrorMessage = 'Favorite required like a false or true'
        //     break
        //   default:
        //     newErrorMessage = errorMessageJoi
        //     break
        // }
        // throw new BadRequest(newErrorMessage)
      }
      next()
    } catch (error) {
      next(error)
    }
  }
}

module.exports = objectCheck
