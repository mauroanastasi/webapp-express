const multer = require(`multer`);

const storage = multer.diskStorage({
    destination: `/pubic/imgs/movies`,
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${file.originalname.name}`
        cb(null, uniqueName);
    }
})

const upload = multer({ storage })
module.exports = upload;
