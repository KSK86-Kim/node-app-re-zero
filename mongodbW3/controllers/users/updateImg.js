const fs = require('fs').promises
const Jimp = require('jimp')
const path = require('path')
const { avatarDir } = require('../../../helpers/routerDir')
const { update } = require('../../service/users')

const updateImg = async (req, res, next) => {
  const { id } = req.user
  const { path: tempPath, originalname } = req.file
  const dirPath = path.join(avatarDir, `${id}`)
  const uploadPath = path.join(avatarDir, id, originalname)

  try {
    if (req.file) {
      await fs.mkdir(dirPath, { recursive: true })
      console.log(tempPath)

      const img = await Jimp.read(tempPath)
      img
        .autocrop()
        .cover(
          250,
          250,
          Jimp.HORIZONTAL_ALIGN_CENTER || Jimp.VERTICAL_ALIGN_MIDDLE
        )
        .writeAsync(tempPath)

      await fs.rename(tempPath, uploadPath)
      const image = `/public/avatars/${id}/${originalname}`
      await update(id, { image })

      return res.json({
        status: 'success',
        code: 200,
        data: {
          image
        },
      })
    }
  } catch (error) {
    fs.unlink(tempPath)
    throw error
  }
}

module.exports = updateImg
