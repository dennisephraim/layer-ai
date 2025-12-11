// Routes
export { default as authRouter } from './routes/auth.js';
export { default as gatesRouter } from './routes/gates.js';
export { default as keysRouter } from './routes/keys.js';
export { default as logsRouter } from './routes/logs.js';
export { default as completeRouter } from './routes/complete.js';

// Middleware
export { authenticate } from './middleware/auth.js';

// Database
export { db } from './lib/db/postgres.js';
export { default as redis } from './lib/db/redis.js';

// Services - only export specific items to avoid conflicts
export { createCompletion as createOpenAICompletion } from './services/providers/openai.js';
export { createCompletion as createAnthropicCompletion } from './services/providers/anthropic.js';
export { createCompletion as createGoogleCompletion } from './services/providers/google.js';
export type { ProviderResponse } from './services/providers/openai.js';
