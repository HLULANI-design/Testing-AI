// Types used across the app

export type RunStatus = "QUEUED" | "RUNNING" | "PASSED" | "FAILED";

export interface TestRun {
  id: string;
  model: string;
  task: string;
  createdAt: string; // ISO string
  startedAt?: string;
  finishedAt?: string;
  status: RunStatus;
  owner: string;
  inputPreview?: string;
  metrics?: {
    accuracy?: number;
    latencyMs?: number;
  };
  output?: any;
  logs?: string[];
}

export interface CreateRunPayload {
  model?: string;
  task: string;
  inputText?: string;
  inputFileUrl?: string;
  contextUrl?: string;
  scheduledFor?: string;
  options?: Record<string, any>;
}
