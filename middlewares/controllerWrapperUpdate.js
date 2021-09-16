const controllerWrapperUpdate = (ctrl, joiSchema) => {
  return async (req, res, next) => {
    try {
      await ctrl(req, res, next, joiSchema)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = controllerWrapperUpdate
