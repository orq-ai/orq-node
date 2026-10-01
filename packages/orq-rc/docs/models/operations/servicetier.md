# ServiceTier

Processing mode for the request. Ultrafast is available for GPT-6 Astra on US/global processing. Fast uses premium low-latency processing; priority remains a backward-compatible alias.

## Example Usage

```typescript
import { ServiceTier } from "@orq-ai/node/models/operations";

let value: ServiceTier = "auto";
```

## Values

```typescript
"auto" | "default" | "flex" | "fast" | "ultrafast" | "scale" | "priority"
```