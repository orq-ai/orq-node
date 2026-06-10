# ResponseReasoningTextDoneStreamEvent

A `response.reasoning_text.done` server-sent event.

## Example Usage

```typescript
import { ResponseReasoningTextDoneStreamEvent } from "@orq-ai/node/models/components";

let value: ResponseReasoningTextDoneStreamEvent = {
  contentIndex: 681167,
  itemId: "<id>",
  outputIndex: 326773,
  sequenceNumber: 379048,
  text: "<value>",
  type: "response.reasoning_text.done",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `contentIndex`                                                | *number*                                                      | :heavy_check_mark:                                            | Index of the content part within the output item.             |
| `itemId`                                                      | *string*                                                      | :heavy_check_mark:                                            | ID of the output item this event refers to.                   |
| `outputIndex`                                                 | *number*                                                      | :heavy_check_mark:                                            | Index of the output item in the response output array.        |
| `sequenceNumber`                                              | *number*                                                      | :heavy_check_mark:                                            | Monotonically increasing sequence number for ordering events. |
| `text`                                                        | *string*                                                      | :heavy_check_mark:                                            | The completed reasoning text.                                 |
| `type`                                                        | *"response.reasoning_text.done"*                              | :heavy_check_mark:                                            | The event type. Discriminates the payload.                    |
| `additionalProperties`                                        | Record<string, *any*>                                         | :heavy_minus_sign:                                            | N/A                                                           |