# PendingToolCalls

## Example Usage

```typescript
import { PendingToolCalls } from "@orq-ai/node/models/components";

let value: PendingToolCalls = {
  id: "<id>",
  type: "function",
  function: {},
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                             | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `type`                                                                                                           | [components.AgentInactiveStreamingEventDataType](../../models/components/agentinactivestreamingeventdatatype.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `function`                                                                                                       | [components.FunctionT](../../models/components/functiont.md)                                                     | :heavy_check_mark:                                                                                               | N/A                                                                                                              |