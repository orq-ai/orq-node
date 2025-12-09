# ToolDoneEventData

## Example Usage

```typescript
import { ToolDoneEventData } from "@orq-ai/node/models/components";

let value: ToolDoneEventData = {
  toolId: "<id>",
  toolCallId: "<id>",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `toolId`                                                   | *string*                                                   | :heavy_check_mark:                                         | Unique identifier for the tool in the tool registry        |
| `toolCallId`                                               | *string*                                                   | :heavy_check_mark:                                         | Unique identifier matching the tool call that was executed |
| `result`                                                   | *any*                                                      | :heavy_minus_sign:                                         | The result returned by the tool                            |