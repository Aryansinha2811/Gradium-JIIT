import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import db from './db/db.js';
import userRoutes from './routes/user.route.js';
import gigRoutes from './routes/gig.route.js';
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
db();
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/gigs', gigRoutes);
app.get('/', (req, res) => {
  res.json({ message: 'Working the server....' });
});
app.get('/health', (req, res) => {
  res.json({ message: 'Server is healthy' });
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server running on port', process.env.PORT || 3000);
});
