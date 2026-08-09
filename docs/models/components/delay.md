# Delay

Ingestion delay subtracted from the evaluation window. Defaults to `120s`.

## Example Usage

```typescript
import { Delay } from "@orq-ai/node/models/components";

let value: Delay = "30s";
```

## Values

```typescript
"30s" | "60s" | "120s" | "300s" | "600s"
```