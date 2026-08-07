import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// Get all posts
router.get('/posts', async (req, res) => {
  const posts = await prisma.post.findMany({ include: { author: { select: { email: true } }, category: true } });
  res.json(posts);
});

// Create post
router.post('/posts', async (req, res) => {
  try {
    const { title, slug, content, published, authorId, categoryId } = req.body;
    const post = await prisma.post.create({
      data: { title, slug, content, published, authorId, categoryId }
    });
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create post' });
  }
});

import { upload } from '../middleware/upload';

// Get all bulletins
router.get('/bulletins', async (req, res) => {
  const bulletins = await prisma.bulletin.findMany({ include: { uploadedBy: { select: { email: true } } } });
  res.json(bulletins);
});

// Upload a bulletin
router.post('/bulletins', upload.single('file'), async (req, res) => {
  try {
    const { title, type, uploadedById } = req.body;
    const fileUrl = `/uploads/${req.file?.filename}`;
    const bulletin = await prisma.bulletin.create({
      data: { title, type, uploadedById, fileUrl }
    });
    res.json(bulletin);
  } catch (err) {
    res.status(500).json({ error: 'Failed to upload bulletin' });
  }
});

// Get all alerts
router.get('/alerts', async (req, res) => {
  const alerts = await prisma.alert.findMany();
  res.json(alerts);
});

export default router;
