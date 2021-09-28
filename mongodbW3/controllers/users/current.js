const current = async (req, res, next) => {
  const { email, subscription, _id, createdAt, updatedAt } = req.user

  res.json({
    status: 'success',
    code: 200,
    data: {
      _id,
      email,
      subscription,
      createdAt,
      updatedAt
    },
  })
}

module.exports = current
