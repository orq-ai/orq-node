# CancelBatchStatus

Current batch status.

## Example Usage

```typescript
import { CancelBatchStatus } from "@orq-ai/node/models/operations";

let value: CancelBatchStatus = "failed";
```

## Values

```typescript
"validating" | "in_progress" | "finalizing" | "completed" | "failed" | "expired" | "cancelling" | "cancelled"
```