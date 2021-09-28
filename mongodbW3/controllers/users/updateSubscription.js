const { update } = require('../../service/users')
// const {
//   updateSubscriptionSchema,
// } = require('../../utils/validate/schemas/user')

const updateSubscription = async (req, res, next) => {
  try {
    const { id: userId } = req.user

    const updateSubscription = await update(userId, {
      ...req.body,
    })
    return res.json({
      status: 'success',
      code: 200,
      data: {
        result: updateSubscription,
      },
    })
  } catch (error) {
    next(error)
  }
}

module.exports = updateSubscription
