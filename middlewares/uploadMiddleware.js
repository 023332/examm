import multer  from 'multer';
import path from "path";


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === 'profilePicture') {
      cb(null, path.join(__dirname, '../../public/uploads/profile-pictures'));
    } else if (file.fieldname === 'bookCover') {
      cb(null, path.join(__dirname, '../../public/uploads/book-covers'));
    } else {
      cb(new Error('Invalid field name'), null);
    }
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});


const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5MB
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    }
    cb(new Error('Error: File type not supported'));
  }
});


module.exports = {
  uploadProfilePicture: upload.single('profilePicture'),
  uploadBookCover: upload.single('bookCover')
};

export class uploadMiddleware {
  static single(cover) {
    return undefined;
  }
}