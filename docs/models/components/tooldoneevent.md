# ToolDoneEvent

Emitted when a tool completes execution successfully. Contains the tool result.

## Example Usage

```typescript
import { ToolDoneEvent } from "@orq-ai/node/models/components";

let value: ToolDoneEvent = {
  type: "tool.done",
  timestamp: "<value>",
  data: {
    toolId: "<id>",
    toolCallId: "<id>",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `type`                                                                       | *"tool.done"*                                                                | :heavy_check_mark:                                                           | N/A                                                                          |
| `timestamp`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | ISO timestamp of when the event occurred                                     |
| `data`                                                                       | [components.ToolDoneEventData](../../models/components/tooldoneeventdata.md) | :heavy_check_mark:                                                           | N/A                                                                          |