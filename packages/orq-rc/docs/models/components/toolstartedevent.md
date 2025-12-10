# ToolStartedEvent

Emitted when a tool begins execution. Contains tool details and input arguments.

## Example Usage

```typescript
import { ToolStartedEvent } from "@orq-ai/node/models/components";

let value: ToolStartedEvent = {
  type: "tool.started",
  timestamp: "<value>",
  data: {
    toolId: "<id>",
    toolCallId: "<id>",
    arguments: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `type`                                                                             | *"tool.started"*                                                                   | :heavy_check_mark:                                                                 | N/A                                                                                |
| `timestamp`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | ISO timestamp of when the event occurred                                           |
| `data`                                                                             | [components.ToolStartedEventData](../../models/components/toolstartedeventdata.md) | :heavy_check_mark:                                                                 | N/A                                                                                |