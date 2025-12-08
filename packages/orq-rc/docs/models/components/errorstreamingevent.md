# ErrorStreamingEvent

Emitted when a streaming error occurs outside of normal agent execution. Contains the error message and error code for debugging.

## Example Usage

```typescript
import { ErrorStreamingEvent } from "@orq-ai/node/models/components";

let value: ErrorStreamingEvent = {
  type: "agents.error",
  timestamp: "<value>",
  data: {
    error: "<value>",
    code: "<value>",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `type`                                                                                   | *"agents.error"*                                                                         | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `timestamp`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | ISO timestamp of the event                                                               |
| `data`                                                                                   | [components.ErrorStreamingEventData](../../models/components/errorstreamingeventdata.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |