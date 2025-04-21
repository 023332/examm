module.exports = {
  app: {
    port: process.env.APP_PORT || 3000,
    env: process.env.APP_ENV || 'development',
  },
  db: {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'examm',
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'your_jwt_secret',
    expiresIn: process.env.JWT_EXPIRES_IN || '1h',
  },
  upload: {
    profilePicturePath: process.env.PROFILE_PICTURE_PATH || 'public/uploads/profile-pictures',
    bookCoverPath: process.env.BOOK_COVER_PATH || 'public/uploads/book-covers',
  },
};