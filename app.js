import 'dotenv/config';
import path from 'node:path';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import './routes/db.js';
import routers from './routes/index.js';

const app = express();
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.static(path.resolve('public')));

// for debuging
// app.use((req, res, next) => {
//   console.log(`Incoming request: ${req.method} ${req.originalUrl}`);
//   next();
// });

app.use('/api', routers);

app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store');
  res.set('Pragma', 'no-cache');
  res.set('Expires', '0');
  next();
});

app.use((_, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message });
});

app.listen(8080, () => {
  console.log('Server is running. Use our API on port: 8080');
});
