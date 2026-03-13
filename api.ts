// API layer (mocked first, backend can swap with axios later)
import { TestRun, CreateRunPayload } from "./types";

// --- MOCK DATA ---
let runs: TestRun[] = [
  {
    id: "run_001",
    model: "meta-llama/Llama-3.1-8B-Instruct",
    task: "text-generation",
    createdAt: new Date().toISOString(),
    status: "PASSED",
    owner: "Hlulani",
    inputPreview: "Generate 5 synthetic emails…",
    metrics: { accuracy: 0.97, latencyMs: 850 },
    output: { samples: ["alice@example.com", "bob@example.com"] },
    logs: ["Job queued", "Model inference OK"],
  },
];

// --- MOCK IMPLEMENTATIONS ---
export async function listRuns(): Promise<TestRun[]> {
  await delay(300);
  return [...runs].reverse();
}

export async function getRun(id: string): Promise<TestRun | undefined> {
  await delay(300);
  return runs.find((r) => r.id === id);
}

export async function createRun(body: CreateRunPayload): Promise<TestRun> {
  await delay(400);
  const now = new Date();
  const newRun: TestRun = {
    id: `run_${Math.random().toString(36).slice(2, 8)}`,
    model: body.model,
    task: body.task,
    createdAt: now.toISOString(),
    status: "RUNNING",
    owner: "Hlulani",
    inputPreview: body.inputText?.slice(0, 80),
  };
  runs.push(newRun);

  // Simulate completion
  setTimeout(() => {
    newRun.status = "PASSED";
    newRun.finishedAt = new Date().toISOString();
    newRun.metrics = { accuracy: 0.95, latencyMs: 1200 };
    newRun.output = {
      message: "Synthetic data generated",
      items: ["one", "two", "three"],
    };
    newRun.logs = [
      "Job queued",
      "HF model invoked",
      "Results post-processed",
    ];
  }, 1500);

  return newRun;
}

// helper
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

/*
  🔗 When backend is ready, replace with:

  import axios from "axios";
  const api = axios.create({ baseURL: import.meta.env.VITE_API_BASE_URL });

  export async function listRuns() {
    const { data } = await api.get("/runs");
    return data;
  }

  export async function getRun(id: string) {
    const { data } = await api.get(`/runs/${id}`);
    return data;
  }

  export async function createRun(body: CreateRunPayload) {
    const { data } = await api.post("/runs", body);
    return data;
  }
*/
