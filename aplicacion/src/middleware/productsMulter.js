const multer = require ('multer');
const path = require ('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, '../public/img/')
    },

    filename: function (req, file, cb) {
        cb(null,
            ${Date.now()}${path.extname(file.originalname)});
        }
})

const uploadFile = multer({ storage });

module.exports = uploadFile;