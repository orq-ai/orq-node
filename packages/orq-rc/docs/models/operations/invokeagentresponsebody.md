# InvokeAgentResponseBody

A2A Task response format

## Example Usage

```typescript
import { InvokeAgentResponseBody } from "@orq-ai/node/models/operations";

let value: InvokeAgentResponseBody = {
  id: "<id>",
  contextId: "<id>",
  kind: "task",
  status: {
    state: "completed",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `id`                                                                         | *string*                                                                     | :heavy_check_mark:                                                           | The ID of the created agent execution task                                   |
| `contextId`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | The context ID (workspace ID)                                                |
| `kind`                                                                       | [operations.InvokeAgentKind](../../models/operations/invokeagentkind.md)     | :heavy_check_mark:                                                           | A2A entity type                                                              |
| `status`                                                                     | [operations.InvokeAgentStatus](../../models/operations/invokeagentstatus.md) | :heavy_check_mark:                                                           | Task status information                                                      |
| `metadata`                                                                   | Record<string, *any*>                                                        | :heavy_minus_sign:                                                           | Task metadata                                                                |