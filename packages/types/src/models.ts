import type { SupportedModel } from "./gates";

// User model
export interface User {
  id: string; 
  email: string; 
  passwordHash: string;
  createdAt: Date;
  updatedAt: Date; 
}

// API Key model
export interface ApiKey {
  id: string; 
  userId: string;
  keyHash: string; 
  keyPrefix: string; 
  name: string; 
  isActive: boolean;
  lastUsedAt: Date | null; 
  createdAt: Date;
}

// Gate model 
export interface Gate {
  id: string; 
  userId: string;
  name: string; 
  model: SupportedModel; 
  systemPrompt?: string; 
  temperature?: number; 
  maxTokens?: number;
  topP?: number;
  createdAt: Date; 
  updatedAt: Date;
}

// Request log model
export interface Request {
  id: string; 
  userId: string; 
  gateId: string | null; 
  gateName: string | null; 
  modelRequested: string; 
  modelUsed: string; 
  promptTokens: number; 
  completionTokens: number; 
  totalTokens: number; 
  costUsd: number; 
  latencyMs: number; 
  success: boolean; 
  errorMessage: string | null; 
  createdAt: Date;
  userAgent?: string; 
  ipAddress?: string; 
  duration?: number; 
}