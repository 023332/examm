import express  from 'express';
import bodyParser  from 'body-parser';
import cors  from 'cors';
import { db }  from './utils/db';
import errorHandler from './middlewares/errorHandler';
import authRoutes  from './routes/authRoutes';
import userRoutes  from './routes/userRoutes';
import bookRoutes  from './routes/bookRoutes';
import categoryRoutes  from './routes/categoryRoutes';
import commentRoutes  from './routes/commentRoutes';
import favoriteRoutes  from './routes/favoriteRoutes';
import adminRoutes  from './routes/adminRoutes';

const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/books', bookRoutes);
app.use('/categories', categoryRoutes);
app.use('/reviews', commentRoutes);
app.use('/favorites', favoriteRoutes);
app.use('/admin', adminRoutes);


app.use(errorHandler);


db.authenticate()
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch(err => {
    console.error('Database connection failed:', err);
  });


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});