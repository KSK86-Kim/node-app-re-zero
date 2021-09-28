const multer = require('multer')
const { tempDir } = require('../helpers/routerDir')

const multerConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, tempDir)
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
  limits: {
    fileSize: 8024
  }
})

const upload = multer({
  storage: multerConfig
})

module.exports = upload
