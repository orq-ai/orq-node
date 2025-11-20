# DataData

## Example Usage

```typescript
import { DataData } from "@orq-ai/node/models/operations";

let value: DataData = {
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