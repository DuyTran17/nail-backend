import multer from 'multer'
import path from 'path'
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'src/public/images/');
  },
  // By default, multer removes file extensions so let's add them back
  filename: function async(req, file, cb) {
    cb(null, req.body.id + path.extname(file.originalname));
  }
});
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 4 * 1024 * 1024,
  }
});

module.exports = upload