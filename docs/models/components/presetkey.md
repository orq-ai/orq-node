# PresetKey

Known preset used to create the monitor. Empty when built from scratch.

## Example Usage

```typescript
import { PresetKey } from "@orq-ai/node/models/components";

let value: PresetKey = "cost-analysis";
```

## Values

```typescript
"genai-overview" | "cost-analysis" | "latency" | "quality" | "widget-spans" | "widget-latency" | "widget-total-llm-cost" | "widget-token-count" | "widget-scores" | "widget-time-to-first-token" | "widget-tool-executions" | "widget-tool-error-rate" | "widget-tool-duration-p50"
```