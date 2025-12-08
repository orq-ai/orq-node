# TimeoutStreamingEvent

Emitted when the agent stream exceeds the configured timeout duration. Contains a message describing the timeout condition.

## Example Usage

```typescript
import { TimeoutStreamingEvent } from "@orq-ai/node/models/components";

let value: TimeoutStreamingEvent = {
  type: "agents.timeout",
  timestamp: "<value>",
  data: {
    message: "<value>",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `type`                                                                                       | *"agents.timeout"*                                                                           | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `timestamp`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | ISO timestamp of the event                                                                   |
| `data`                                                                                       | [components.TimeoutStreamingEventData](../../models/components/timeoutstreamingeventdata.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |