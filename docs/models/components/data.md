# Data

## Example Usage

```typescript
import { Data } from "@orq-ai/node/models/components";

let value: Data = {
  agentTaskId: "<id>",
  workspaceId: "<id>",
  traceId: "<id>",
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `agentTaskId`                  | *string*                       | :heavy_check_mark:             | Agent execution task ID (ULID) |
| `workspaceId`                  | *string*                       | :heavy_check_mark:             | Workspace ID                   |
| `traceId`                      | *string*                       | :heavy_check_mark:             | Trace ID for the workflow run  |