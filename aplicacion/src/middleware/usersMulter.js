const multer = require ('multer');
const path = require ('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/img/users/')
    },
    filename: (req, file, cb) => {
        const filename = `${Date.now()}-image${path.extname(file.originalname)}`
        cb(null, filename);
    }
})

const upload = multer({ storage });
module.exports = upload;