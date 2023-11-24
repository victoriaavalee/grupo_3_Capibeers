const multer = require ('multer');
const path = require ('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../public/img/users/')
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);
    }
    /*filename: function (req, file, cb) { //opcion ej1
        const newFilename = `user-${Date.now()}${path.extname(file.originalname)}` 
        cb(null,newFilename)
    }
    filename: (req, file, cb) => {  //opcion ej2
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
    */
})

const uploadFile = multer({ storage });
module.exports = uploadFile;
