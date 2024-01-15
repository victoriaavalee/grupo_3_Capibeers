const multer = require ('multer');
const path = require ('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/img/products/'); 
    },
    filename: (req, file, cb) => {
        const filename = `${Date.now()}-image${path.extname(file.originalname)}`
        cb(null, filename);
    }
});

const uploadFile = multer({ storage });

module.exports = uploadFile;