# ResponseRefusalDeltaStreamEventData

The event payload.

## Example Usage

```typescript
import { ResponseRefusalDeltaStreamEventData } from "@orq-ai/node/models/components";

let value: ResponseRefusalDeltaStreamEventData = {
  contentIndex: 12071,
  delta: "<value>",
  itemId: "<id>",
  outputIndex: 599828,
  sequenceNumber: 742066,
  type: "response.refusal.delta",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `contentIndex`                                                                                                   | *number*                                                                                                         | :heavy_check_mark:                                                                                               | Index of the content part within the output item.                                                                |
| `delta`                                                                                                          | *string*                                                                                                         | :heavy_check_mark:                                                                                               | Incremental text or argument chunk.                                                                              |
| `itemId`                                                                                                         | *string*                                                                                                         | :heavy_check_mark:                                                                                               | ID of the output item this event refers to.                                                                      |
| `outputIndex`                                                                                                    | *number*                                                                                                         | :heavy_check_mark:                                                                                               | Index of the output item in the response output array.                                                           |
| `sequenceNumber`                                                                                                 | *number*                                                                                                         | :heavy_check_mark:                                                                                               | Monotonically increasing sequence number for ordering events.                                                    |
| `type`                                                                                                           | [components.ResponseRefusalDeltaStreamEventType](../../models/components/responserefusaldeltastreameventtype.md) | :heavy_check_mark:                                                                                               | The event type. Matches the SSE `event` field.                                                                   |
| `additionalProperties`                                                                                           | Record<string, *any*>                                                                                            | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |