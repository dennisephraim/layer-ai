export { Layer } from './client.js';
export type { LayerConfig } from './types.js';
export { KeysResource } from './resources/keys.js';
export { GatesResource } from './resources/gates.js';
export { LogsResource } from './resources/logs.js';
export type { 
  Message, 
  CompletionRequest, 
  CompletionResponse, 
  ErrorResponse,
  Gate,
  CreateGateRequest,
  UpdateGateRequest,
  ApiKey,
  CreateKeyRequest,
  CreateKeyResponse,
  Log,
  ListLogOptions,
} from '@layer-ai/types';