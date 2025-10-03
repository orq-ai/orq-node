# Status

Comma-separated list of task statuses to filter by. Available values: inactive, approval_required, in_progress, errored

## Example Usage

```typescript
import { Status } from "@orq-ai/node/models/operations";

let value: Status = "in_progress";
```

## Values

```typescript
"inactive" | "approval_required" | "in_progress" | "errored"
```