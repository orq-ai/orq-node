# ResponseContentPartDoneStreamEvent

A `response.content_part.done` server-sent event.

## Example Usage

```typescript
import { ResponseContentPartDoneStreamEvent } from "@orq-ai/node/models/components";

let value: ResponseContentPartDoneStreamEvent = {
  contentIndex: 666083,
  itemId: "<id>",
  outputIndex: 884313,
  part: {
    "key": "<value>",
  },
  sequenceNumber: 797752,
  type: "response.content_part.done",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `contentIndex`                                                | *number*                                                      | :heavy_check_mark:                                            | Index of the content part within the output item.             |
| `itemId`                                                      | *string*                                                      | :heavy_check_mark:                                            | ID of the output item this event refers to.                   |
| `outputIndex`                                                 | *number*                                                      | :heavy_check_mark:                                            | Index of the output item in the response output array.        |
| `part`                                                        | Record<string, *any*>                                         | :heavy_check_mark:                                            | The content part.                                             |
| `sequenceNumber`                                              | *number*                                                      | :heavy_check_mark:                                            | Monotonically increasing sequence number for ordering events. |
| `type`                                                        | *"response.content_part.done"*                                | :heavy_check_mark:                                            | The event type. Discriminates the payload.                    |
| `additionalProperties`                                        | Record<string, *any*>                                         | :heavy_minus_sign:                                            | N/A                                                           |