# RetrieveBatchStatus

Current batch status.

## Example Usage

```typescript
import { RetrieveBatchStatus } from "@orq-ai/node/models/operations";

let value: RetrieveBatchStatus = "cancelling";
```

## Values

```typescript
"validating" | "in_progress" | "finalizing" | "completed" | "failed" | "expired" | "cancelling" | "cancelled"
```