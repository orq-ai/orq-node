# InvokeAgentStatus

Task status information

## Example Usage

```typescript
import { InvokeAgentStatus } from "@orq-ai/node/models/operations";

let value: InvokeAgentStatus = {
  state: "submitted",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `state`                                                                        | [operations.InvokeAgentState](../../models/operations/invokeagentstate.md)     | :heavy_check_mark:                                                             | Current task state                                                             |
| `timestamp`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | ISO timestamp of status update                                                 |
| `message`                                                                      | [operations.InvokeAgentMessage](../../models/operations/invokeagentmessage.md) | :heavy_minus_sign:                                                             | Optional status message                                                        |