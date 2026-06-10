# ResponseOutputTextDoneStreamEvent

A `response.output_text.done` server-sent event.

## Example Usage

```typescript
import { ResponseOutputTextDoneStreamEvent } from "@orq-ai/node/models/components";

let value: ResponseOutputTextDoneStreamEvent = {
  contentIndex: 255769,
  itemId: "<id>",
  logprobs: [
    {},
    {},
    {},
  ],
  outputIndex: 241295,
  sequenceNumber: 273433,
  text: "<value>",
  type: "response.output_text.done",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `contentIndex`                                                | *number*                                                      | :heavy_check_mark:                                            | Index of the content part within the output item.             |
| `itemId`                                                      | *string*                                                      | :heavy_check_mark:                                            | ID of the output item this event refers to.                   |
| `logprobs`                                                    | Record<string, *any*>[]                                       | :heavy_check_mark:                                            | Log probability information for the emitted tokens.           |
| `outputIndex`                                                 | *number*                                                      | :heavy_check_mark:                                            | Index of the output item in the response output array.        |
| `sequenceNumber`                                              | *number*                                                      | :heavy_check_mark:                                            | Monotonically increasing sequence number for ordering events. |
| `text`                                                        | *string*                                                      | :heavy_check_mark:                                            | The completed output text.                                    |
| `type`                                                        | *"response.output_text.done"*                                 | :heavy_check_mark:                                            | The event type. Discriminates the payload.                    |
| `additionalProperties`                                        | Record<string, *any*>                                         | :heavy_minus_sign:                                            | N/A                                                           |