// Centralized model registry - single source of truth
// Data sources:
// - Artificial Analysis API: pricing, benchmarks, performance metrics
// - OpenRouter API: context window, input/output modalities
//
// To update: Run `pnpm run sync:models` (requires ARTIFICIAL_ANALYSIS_API_KEY in .env)
// APIs:
// - https://artificialanalysis.ai/api/v2/data/llms/models
// - https://openrouter.ai/api/v1/models
// Data attribution: https://artificialanalysis.ai/

export interface ModelEntry {
  provider: string;
  displayName: string;
  pricing: {
    input: number;
    output: number;
  }
  benchmarks?: {
    intelligence?: number;
    coding?: number;
    math?: number;
    mmluPro?: number;
    gpqa?: number;
  }
  performance?: {
    outputTokenPerSecond?: number;
    timeTofirstToken?: number;
    intelligenceScore?: number;
  }
  context?: {
    window?: number;
    input: {
      text: boolean;
      image: boolean;
      audio: boolean;
      video: boolean
    }
    output: {
      text: boolean;
      image: boolean;
      audio: boolean;
      video: boolean;
    }
  }
  isAvailable?: boolean;
  lastUpdated?: string;
}

export const MODEL_REGISTRY = {
  // Openai models
  'gpt-4o': {
    provider: 'openai' as const,
    displayName: 'GPT-4o (Nov \'24)',
    pricing: { input: 0.0025, output: 0.01 },
    benchmarks: {
      intelligence: 27,
      coding: 24,
      math: 6,
      mmluPro: 0.748,
      gpqa: 0.543,
    },
    performance: {
      outputTokenPerSecond: 137.258,
      timeTofirstToken: 0.531,
      intelligenceScore: 27,
    },
    context: {
      window: 128000,
      input: {
        text: true,
        image: true,
        audio: false,
        video: false,
      },
      output: {
        text: true,
        image: false,
        audio: false,
        video: false,
      },
    },
    lastUpdated: '2025-11-27',
  },
  'gpt-4o-mini': {
    provider: 'openai' as const,
    displayName: 'GPT-4o mini',
    pricing: { input: 0.00015, output: 0.0006 },
    benchmarks: {
      intelligence: 21.2,
      math: 14.7,
      mmluPro: 0.648,
      gpqa: 0.426,
    },
    performance: {
      outputTokenPerSecond: 49.306,
      timeTofirstToken: 0.503,
      intelligenceScore: 21.2,
    },
    context: {
      window: 128000,
      input: {
        text: true,
        image: true,
        audio: false,
        video: false,
      },
      output: {
        text: true,
        image: false,
        audio: false,
        video: false,
      },
    },
    lastUpdated: '2025-11-27',
  },

  // Anthropic models
  'claude-haiku-4-5-20251001': {
    provider: 'anthropic' as const,
    displayName: 'Claude 4.5 Haiku (Non-reasoning)',
    pricing: { input: 0.001, output: 0.005 },
    benchmarks: {
      intelligence: 41.7,
      coding: 37,
      math: 39,
      mmluPro: 0.8,
      gpqa: 0.646,
    },
    performance: {
      outputTokenPerSecond: 100.11,
      timeTofirstToken: 1.035,
      intelligenceScore: 41.7,
    },
    context: {
      window: 200000,
      input: {
        text: true,
        image: true,
        audio: false,
        video: false,
      },
      output: {
        text: true,
        image: false,
        audio: false,
        video: false,
      },
    },
    lastUpdated: '2025-11-27',
  },
  'claude-opus-4-1-20250805': {
    provider: 'anthropic' as const,
    displayName: 'Claude 4.1 Opus (Non-reasoning)',
    pricing: { input: 0.015, output: 0.075 },
    benchmarks: {
      intelligence: 44.6,
    },
    performance: {
      outputTokenPerSecond: 39.947,
      timeTofirstToken: 1.445,
      intelligenceScore: 44.6,
    },
    context: {
      window: 200000,
      input: {
        text: true,
        image: true,
        audio: false,
        video: false,
      },
      output: {
        text: true,
        image: false,
        audio: false,
        video: false,
      },
    },
    lastUpdated: '2025-11-27',
  },
  'claude-sonnet-4-5-20250929': {
    provider: 'anthropic' as const,
    displayName: 'Claude 4.5 Sonnet (Non-reasoning)',
    pricing: { input: 0.003, output: 0.015 },
    benchmarks: {
      intelligence: 49.6,
      coding: 42.9,
      math: 37,
      mmluPro: 0.86,
      gpqa: 0.727,
    },
    performance: {
      outputTokenPerSecond: 70.948,
      timeTofirstToken: 2.006,
      intelligenceScore: 49.6,
    },
    context: {
      window: 1000000,
      input: {
        text: true,
        image: true,
        audio: false,
        video: false,
      },
      output: {
        text: true,
        image: false,
        audio: false,
        video: false,
      },
    },
    lastUpdated: '2025-11-27',
  },
  'claude-3-5-haiku-20241022': {
    provider: 'anthropic' as const,
    displayName: 'Claude 3.5 Haiku',
    pricing: { input: 0.0008, output: 0.004 },
    benchmarks: {
      intelligence: 20.2,
      mmluPro: 0.634,
      gpqa: 0.408,
    },
    performance: {
      outputTokenPerSecond: 47.501,
      timeTofirstToken: 0.713,
      intelligenceScore: 20.2,
    },
    context: {
      window: 200000,
      input: {
        text: true,
        image: true,
        audio: false,
        video: false,
      },
      output: {
        text: true,
        image: false,
        audio: false,
        video: false,
      },
    },
    lastUpdated: '2025-11-27',
  },
  'claude-3-7-sonnet-20250219': {
    provider: 'anthropic' as const,
    displayName: 'Claude 3.7 Sonnet (Non-reasoning)',
    pricing: { input: 0.003, output: 0.015 },
    benchmarks: {
      intelligence: 41.1,
      coding: 32.3,
      math: 21,
      mmluPro: 0.803,
      gpqa: 0.656,
    },
    performance: {
      outputTokenPerSecond: 56.392,
      timeTofirstToken: 0.551,
      intelligenceScore: 41.1,
    },
    context: {
      window: 200000,
      input: {
        text: true,
        image: true,
        audio: false,
        video: false,
      },
      output: {
        text: true,
        image: false,
        audio: false,
        video: false,
      },
    },
    lastUpdated: '2025-11-27',
  },

  // Google models
  'gemini-2.5-pro': {
    provider: 'google' as const,
    displayName: 'Gemini 2.5 Pro',
    pricing: { input: 0.00125, output: 0.01 },
    benchmarks: {
      intelligence: 59.6,
      coding: 49.3,
      math: 87.7,
      mmluPro: 0.862,
      gpqa: 0.844,
    },
    performance: {
      outputTokenPerSecond: 42.557,
      timeTofirstToken: 15.534,
      intelligenceScore: 59.6,
    },
    context: {
      window: 1048576,
      input: {
        text: true,
        image: true,
        audio: false,
        video: false,
      },
      output: {
        text: true,
        image: false,
        audio: false,
        video: false,
      },
    },
    lastUpdated: '2025-11-27',
  },
  'gemini-2.0-flash': {
    provider: 'google' as const,
    displayName: 'Gemini 2.0 Flash (Feb \'25)',
    pricing: { input: 0.0001, output: 0.0004 },
    benchmarks: {
      intelligence: 33.6,
      coding: 23.4,
      math: 21.7,
      mmluPro: 0.779,
      gpqa: 0.623,
    },
    performance: {
      outputTokenPerSecond: 161.857,
      timeTofirstToken: 0.375,
      intelligenceScore: 33.6,
    },
    context: {
      window: 1048576,
      input: {
        text: true,
        image: true,
        audio: false,
        video: false,
      },
      output: {
        text: true,
        image: false,
        audio: false,
        video: false,
      },
    },
    lastUpdated: '2025-11-27',
  },
  'gemini-2.5-flash': {
    provider: 'google' as const,
    displayName: 'Gemini 2.5 Flash (Non-reasoning)',
    pricing: { input: 0.0003, output: 0.0025 },
    benchmarks: {
      intelligence: 40.4,
      coding: 30,
      math: 60.3,
      mmluPro: 0.809,
      gpqa: 0.683,
    },
    performance: {
      outputTokenPerSecond: 230.517,
      timeTofirstToken: 0.401,
      intelligenceScore: 40.4,
    },
    context: {
      window: 1048576,
      input: {
        text: true,
        image: true,
        audio: false,
        video: false,
      },
      output: {
        text: true,
        image: false,
        audio: false,
        video: false,
      },
    },
    lastUpdated: '2025-11-27',
  },

} as const;

// Derive types from registry
export type SupportedModel = keyof typeof MODEL_REGISTRY;
export type Provider = typeof MODEL_REGISTRY[SupportedModel]['provider'];
