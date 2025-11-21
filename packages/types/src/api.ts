// Message format (OpenAI-compatible)
export interface Message {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

// Main completion request (what developers send)
export interface CompletionRequest {
  gate: string; // name of gate
  messages: Message[]; // conversation messages array

  // Optional gate overrides for developers to get more control
  temperature?: number;
  maxTokens?: number;
  topP?: number;
}

// Completion response (what we return to developers)
export interface CompletionResponse {
  content: string;
  model: string; // The model that was used
  usage: {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  }
}

// Error response
export interface ErrorResponse {
  error: string; 
  message: string; 
  details?: any; 
}