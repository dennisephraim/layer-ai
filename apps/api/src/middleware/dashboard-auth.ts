import { Request, Response, NextFunction } from 'express';

/**
 * Auth middleware for dashboard routes
 *
 * Expected header format:
 * X-User-Id: <user_id>
 *
 * This is used by the Next.js dashboard which manages sessions via NextAuth.
 * The dashboard sends the user ID from the session in the X-User-Id header.
 */
export async function authenticateDashboard(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const userId = req.headers['x-user-id'] as string;

    if (!userId) {
      res.status(401).json({
        error: 'unauthorized',
        message: 'Missing X-User-Id header',
      });
      return;
    }

    // Attach userId to request for downstream handlers
    req.userId = userId;

    // Proceed to next route handler
    next();
  } catch (error) {
    console.error('Dashboard authentication error:', error);
    res.status(500).json({
      error: 'internal_error',
      message: 'Authentication failed',
    });
  }
}
