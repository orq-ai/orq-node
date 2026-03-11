# GetAgentResponsePendingToolCalls

## Example Usage

```typescript
import { GetAgentResponsePendingToolCalls } from "@orq-ai/node/models/components";

let value: GetAgentResponsePendingToolCalls = {
  id: "<id>",
  type: "function",
  function: {},
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `id`                                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `type`                                                                                     | [components.GetAgentResponseType](../../models/components/getagentresponsetype.md)         | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `function`                                                                                 | [components.GetAgentResponseFunction](../../models/components/getagentresponsefunction.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |