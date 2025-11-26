import { OverrideConfig } from "./models";
import { MODEL_REGISTRY, type SupportedModel, type Provider } from "./model-registry";

// Re-export for backwards compatibility
export { MODEL_REGISTRY };
export type { SupportedModel, Provider };

// Gate creation request
export interface CreateGateRequest {
  name: string;
  description?: string;
  model: SupportedModel;
  systemPrompt?: string;
  allowOverrides?: boolean | OverrideConfig;
  temperature?: number;
  maxTokens?: number;
  topP?: number;
  tags?: string[];
  routingStrategy?: 'single' | 'fallback' | 'round-robin';
  fallbackModels?: SupportedModel[];
}

// Gate update request
export interface UpdateGateRequest {
  description?: string;
  model?: SupportedModel;
  systemPrompt?: string;
  allowOverrides?: boolean | OverrideConfig;
  temperature?: number;
  maxTokens?: number;
  topP?: number;
  tags?: string[];
  routingStrategy?: 'single' | 'fallback' | 'round-robin';
  fallbackModels?: SupportedModel[];
}

// Gate with analytics
export interface GateWithAnalytics {
  id: string; 
  userId: string; 
  name: string; 
  model: SupportedModel; 
  createdAt: Date; 
  updatedAt: Date; 
  requestCount: number; 
  totalCost:number; 
  successRate: number; 
}

