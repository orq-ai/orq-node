# RunAgentResponseBody

A2A Task response format

## Example Usage

```typescript
import { RunAgentResponseBody } from "@orq-ai/node/models/operations";

let value: RunAgentResponseBody = {
  id: "<id>",
  contextId: "<id>",
  kind: "task",
  status: {
    state: "unknown",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `id`                                                                   | *string*                                                               | :heavy_check_mark:                                                     | The ID of the created agent execution task                             |
| `contextId`                                                            | *string*                                                               | :heavy_check_mark:                                                     | The correlation ID for this execution                                  |
| `kind`                                                                 | [operations.RunAgentKind](../../models/operations/runagentkind.md)     | :heavy_check_mark:                                                     | A2A entity type                                                        |
| `status`                                                               | [operations.RunAgentStatus](../../models/operations/runagentstatus.md) | :heavy_check_mark:                                                     | Task status information                                                |
| `metadata`                                                             | Record<string, *any*>                                                  | :heavy_minus_sign:                                                     | Task metadata containing workspace_id and trace_id for feedback        |