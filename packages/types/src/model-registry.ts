// Centralized model registry - single source of truth
// Includes pricing, capabilities (0-1 scale from benchmarks), latency, and quality tier
//
// TODO: Implement sync script to update capabilities from Artificial Analysis API
// API: https://artificialanalysis.ai/api/v2/data/llms/models
// Mapping: math_index → math, coding_index → coding, intelligence_index → reasoning/creativity/classification
// Attribution required: https://artificialanalysis.ai/
export const MODEL_REGISTRY = {
  // OpenAI models
  'gpt-4o': {
    provider: 'openai' as const,
    displayName: 'GPT-4o',
    pricing: { input: 0.005, output: 0.015 },
  },
  'gpt-4o-mini': {
    provider: 'openai' as const,
    displayName: 'GPT-4o Mini',
    pricing: { input: 0.00015, output: 0.0006 },
  },

  // Anthropic models (current as of Nov 2025)
  'claude-sonnet-4-5-20250929': {
    provider: 'anthropic' as const,
    displayName: 'Claude Sonnet 4.5',
    pricing: { input: 0.003, output: 0.015 },
  },
  'claude-opus-4-1-20250805': {
    provider: 'anthropic' as const,
    displayName: 'Claude Opus 4.1',
    pricing: { input: 0.015, output: 0.075 },
  },
  'claude-haiku-4-5-20251001': {
    provider: 'anthropic' as const,
    displayName: 'Claude Haiku 4.5',
    pricing: { input: 0.001, output: 0.005 },
  },
  'claude-sonnet-4-20250514': {
    provider: 'anthropic' as const,
    displayName: 'Claude Sonnet 4',
    pricing: { input: 0.003, output: 0.015 },
  },
  'claude-3-7-sonnet-20250219': {
    provider: 'anthropic' as const,
    displayName: 'Claude 3.7 Sonnet',
    pricing: { input: 0.003, output: 0.015 },
  },
  'claude-3-5-haiku-20241022': {
    provider: 'anthropic' as const,
    displayName: 'Claude 3.5 Haiku',
    pricing: { input: 0.0008, output: 0.004 },
  },
  'gemini-2.0-flash': {
    provider: 'google' as const,
    displayName: 'Gemini 2.0 Flash',
    pricing: { input: 0.0001, output: 0.0004 },
  },
  'gemini-2.5-pro': {
    provider: 'google' as const,
    displayName: 'Gemini 2.5 Pro',
    pricing: { input: 0.00125, output: 0.01 },
  },
  'gemini-2.5-flash': {
    provider: 'google' as const,
    displayName: 'Gemini 2.5 Flash',
    pricing: { input: 0.000075, output: 0.0003 },
  },
} as const;

// Derive types from registry
export type SupportedModel = keyof typeof MODEL_REGISTRY;
export type Provider = typeof MODEL_REGISTRY[SupportedModel]['provider'];
