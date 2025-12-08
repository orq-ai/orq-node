# ToolFailedEvent

Emitted when a tool execution fails. Contains error details.

## Example Usage

```typescript
import { ToolFailedEvent } from "@orq-ai/node/models/components";

let value: ToolFailedEvent = {
  type: "tool.failed",
  timestamp: "<value>",
  data: {
    toolId: "<id>",
    toolCallId: "<id>",
    error: "<value>",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `type`                                                                           | *"tool.failed"*                                                                  | :heavy_check_mark:                                                               | N/A                                                                              |
| `timestamp`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | ISO timestamp of when the event occurred                                         |
| `data`                                                                           | [components.ToolFailedEventData](../../models/components/toolfailedeventdata.md) | :heavy_check_mark:                                                               | N/A                                                                              |