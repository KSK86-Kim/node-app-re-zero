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
    if (error) {
      return res.status(400).json({
        status: 'error',
        code: 400,
        messge: error.message
      })
    }
    next()
  }
}

module.exports = objectCheck
