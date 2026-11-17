# PublicBatchStatus

Current batch status.

## Example Usage

```typescript
import { PublicBatchStatus } from "@orq-ai/node/models/components";

let value: PublicBatchStatus = "failed";
```

## Values

```typescript
"validating" | "in_progress" | "finalizing" | "completed" | "failed" | "expired" | "cancelling" | "cancelled"
```