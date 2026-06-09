# ResponseOutputTextDoneStreamEventData

The event payload.

## Example Usage

```typescript
import { ResponseOutputTextDoneStreamEventData } from "@orq-ai/node/models/components";

let value: ResponseOutputTextDoneStreamEventData = {
  contentIndex: 495152,
  itemId: "<id>",
  logprobs: [],
  outputIndex: 80572,
  sequenceNumber: 940316,
  text: "<value>",
  type: "response.output_text.done",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `contentIndex`                                                                                                       | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | Index of the content part within the output item.                                                                    |
| `itemId`                                                                                                             | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | ID of the output item this event refers to.                                                                          |
| `logprobs`                                                                                                           | Record<string, *any*>[]                                                                                              | :heavy_check_mark:                                                                                                   | Log probability information for the emitted tokens.                                                                  |
| `outputIndex`                                                                                                        | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | Index of the output item in the response output array.                                                               |
| `sequenceNumber`                                                                                                     | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | Monotonically increasing sequence number for ordering events.                                                        |
| `text`                                                                                                               | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The completed output text.                                                                                           |
| `type`                                                                                                               | [components.ResponseOutputTextDoneStreamEventType](../../models/components/responseoutputtextdonestreameventtype.md) | :heavy_check_mark:                                                                                                   | The event type. Matches the SSE `event` field.                                                                       |
| `additionalProperties`                                                                                               | Record<string, *any*>                                                                                                | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |