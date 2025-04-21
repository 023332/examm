# Book Review API

## Overview
The Book Review API is a RESTful API that allows users to manage book reviews, favorite books, comments, and categories. It provides functionalities for user authentication, profile management, and admin operations.

## Features
- **User Authentication**: Users can register, log in, and manage their profiles.
- **Book Management**: Users can add, update, and retrieve book details.
- **Favorite Books**: Users can mark books as favorites and retrieve their favorite books.
- **Commenting System**: Users can leave comments on reviews and retrieve comments for specific reviews.
- **Book Categories**: Users can categorize books and manage categories.
- **Admin Panel**: Admins can manage users, books, and reviews.

## API Endpoints

### Authentication
- `POST /auth/register`: Register a new user.
- `POST /auth/login`: Log in an existing user.

### Users
- `GET /users/:userId`: Retrieve user details.
- `POST /users/:userId/profile-picture`: Upload a profile picture.

### Books
- `POST /books`: Add a new book.
- `GET /books`: Retrieve a list of all books.
- `GET /books/:bookId`: Retrieve details of a specific book.
- `POST /books/:bookId/favorite`: Mark a book as a favorite.

### Favorites
- `GET /users/:userId/favorites`: Retrieve a list of all favorite books for a user.

### Comments
- `POST /reviews/:reviewId/comments`: Submit a comment on a review.
- `GET /reviews/:reviewId/comments`: Retrieve all comments for a specific review.

### Categories
- `POST /categories`: Add a new category (admin only).
- `GET /categories`: Retrieve a list of all categories.
- `POST /books/:bookId/categories`: Assign categories to a book.

### Admin
- `GET /admin/users`: Retrieve a list of all users (admin only).
- `DELETE /admin/users/:userId`: Delete a user (admin only).
- `DELETE /admin/reviews/:reviewId`: Delete a review (admin only).

### Search
- `GET /books/search`: Search for books by title, author, or category.

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd book-review-api
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Create a `.env` file and configure your environment variables.

## Usage
Start the server:
```
npm start
```

## Testing
Run tests using:
```
npm test
```

## Contributing
Contributions are welcome! Please submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.