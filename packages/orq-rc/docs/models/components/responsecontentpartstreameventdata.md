# ResponseContentPartStreamEventData

The event payload.

## Example Usage

```typescript
import { ResponseContentPartStreamEventData } from "@orq-ai/node/models/components";

let value: ResponseContentPartStreamEventData = {
  contentIndex: 142411,
  itemId: "<id>",
  outputIndex: 320309,
  part: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  sequenceNumber: 558976,
  type: "response.content_part.done",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `contentIndex`                                                                                                 | *number*                                                                                                       | :heavy_check_mark:                                                                                             | Index of the content part within the output item.                                                              |
| `itemId`                                                                                                       | *string*                                                                                                       | :heavy_check_mark:                                                                                             | ID of the output item this event refers to.                                                                    |
| `outputIndex`                                                                                                  | *number*                                                                                                       | :heavy_check_mark:                                                                                             | Index of the output item in the response output array.                                                         |
| `part`                                                                                                         | Record<string, *any*>                                                                                          | :heavy_check_mark:                                                                                             | The content part.                                                                                              |
| `sequenceNumber`                                                                                               | *number*                                                                                                       | :heavy_check_mark:                                                                                             | Monotonically increasing sequence number for ordering events.                                                  |
| `type`                                                                                                         | [components.ResponseContentPartStreamEventType](../../models/components/responsecontentpartstreameventtype.md) | :heavy_check_mark:                                                                                             | The event type. Matches the SSE `event` field.                                                                 |
| `additionalProperties`                                                                                         | Record<string, *any*>                                                                                          | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |