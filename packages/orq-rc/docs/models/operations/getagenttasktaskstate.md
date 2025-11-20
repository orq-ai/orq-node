# GetAgentTaskTaskState

Current state of the agent task execution. Values: submitted (queued), working (executing), input-required (awaiting user input), completed (finished successfully), failed (error occurred). Note: auth-required, canceled, and rejected statuses are defined for A2A protocol compatibility but are not currently supported in task execution.

## Example Usage

```typescript
import { GetAgentTaskTaskState } from "@orq-ai/node/models/operations";

let value: GetAgentTaskTaskState = "auth-required";
```

## Values

```typescript
"submitted" | "working" | "input-required" | "auth-required" | "completed" | "failed" | "canceled" | "rejected"
```