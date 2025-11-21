import { Router, Request, Response } from 'express';
import type { Router as RouterType } from 'express';
import bcrypt from 'bcryptjs';
import { db } from '../lib/db/postgres.js';

const router: RouterType = Router();

// POST /api/auth/signup
router.post('/signup', async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ error: 'bad_request', message: 'Email and password required' });
      return;
    }

    // check if user exists
    const existing = await db.getUserByEmail(email);
    if (existing) {
      res.status(409).json({ error: 'conflict', message: 'Email already registered'});
      return;
    }

    // hash password
    const passwordHash = await bcrypt.hash(password, 10);

    // create the user 
    const user = await db.createUser(email, passwordHash);

    res.status(201).json({ id: user.id, email: user.email });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ error: 'internal_error', message: 'Failed to create account '});
  }
});

// POST /api/auth/login
router.post('/login', async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ error: 'bad_request', message: 'Email and password required' });
      return;
    }

    // Get user 
    const user = await db.getUserByEmail(email);
    if (!user) {
      res.status(401).json({ error: 'unauthorized', message: 'Invalid credentials' });
      return; 
    }

    // Verify password
    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) {
      res.status(401).json({ error: 'unauthorized', message: 'Invalid credentials' });
      return; 
    }

    // return user (Next auth expects the id and email)
    res.json({ id: user.id, email: user.email });
  } catch (error) {
    console.error('Login error', error);
    res.status(500).json({ error: 'internal_error', message: 'Failed to login' });
  }
});

export default router;