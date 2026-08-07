import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import path from 'path';

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Serve static files from the uploads directory for local file storage
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

app.get('/', (req, res) => {
  res.send('ACMAD API is running');
});

import authRoutes from './routes/authRoutes';
import cmsRoutes from './routes/cmsRoutes';

app.use('/api/auth', authRoutes);
app.use('/api/cms', cmsRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
