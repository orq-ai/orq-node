# ResponseDoneEvent

Emitted when the agent completes processing. Contains the finish reason and usage statistics.

## Example Usage

```typescript
import { ResponseDoneEvent } from "@orq-ai/node/models/components";

let value: ResponseDoneEvent = {
  type: "response.done",
  timestamp: "<value>",
  data: {
    finishReason: "length",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `type`                                                                               | *"response.done"*                                                                    | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `timestamp`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | ISO timestamp of when the event occurred                                             |
| `data`                                                                               | [components.ResponseDoneEventData](../../models/components/responsedoneeventdata.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |