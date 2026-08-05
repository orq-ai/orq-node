# Metric

Catalogue metric to query.

## Example Usage

```typescript
import { Metric } from "@orq-ai/node/models/components";

let value: Metric = "genai.guardrail.block_rate";
```

## Values

```typescript
"genai.requests" | "genai.tokens" | "genai.cost" | "genai.errors" | "genai.latency.p50" | "genai.latency.p95" | "genai.latency.p99" | "genai.evaluator.runs" | "genai.evaluator.pass_rate" | "genai.evaluator.score.avg" | "genai.guardrail.runs" | "genai.guardrail.block_rate" | "genai.guardrail.triggered" | "genai.usage"
```