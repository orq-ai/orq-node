# ResponseFailedEvent

Emitted when an error occurs during agent execution. Contains error details.

## Example Usage

```typescript
import { ResponseFailedEvent } from "@orq-ai/node/models/components";

let value: ResponseFailedEvent = {
  type: "response.failed",
  timestamp: "<value>",
  data: {
    error: "<value>",
    code: 8657.41,
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `type`                                                                                   | *"response.failed"*                                                                      | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `timestamp`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | ISO timestamp of when the event occurred                                                 |
| `data`                                                                                   | [components.ResponseFailedEventData](../../models/components/responsefailedeventdata.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |