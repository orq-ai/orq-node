# CreateBatchStatus

Current batch status.

## Example Usage

```typescript
import { CreateBatchStatus } from "@orq-ai/node/models/operations";

let value: CreateBatchStatus = "failed";
```

## Values

```typescript
"validating" | "in_progress" | "finalizing" | "completed" | "failed" | "expired" | "cancelling" | "cancelled"
```