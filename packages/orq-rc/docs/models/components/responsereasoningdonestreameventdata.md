# ResponseReasoningDoneStreamEventData

The event payload.

## Example Usage

```typescript
import { ResponseReasoningDoneStreamEventData } from "@orq-ai/node/models/components";

let value: ResponseReasoningDoneStreamEventData = {
  contentIndex: 279369,
  itemId: "<id>",
  outputIndex: 155474,
  sequenceNumber: 617448,
  text: "<value>",
  type: "response.reasoning_text.done",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `contentIndex`                                                                                                     | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | Index of the content part within the output item.                                                                  |
| `itemId`                                                                                                           | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | ID of the output item this event refers to.                                                                        |
| `outputIndex`                                                                                                      | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | Index of the output item in the response output array.                                                             |
| `sequenceNumber`                                                                                                   | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | Monotonically increasing sequence number for ordering events.                                                      |
| `text`                                                                                                             | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The completed reasoning text.                                                                                      |
| `type`                                                                                                             | [components.ResponseReasoningDoneStreamEventType](../../models/components/responsereasoningdonestreameventtype.md) | :heavy_check_mark:                                                                                                 | The event type. Matches the SSE `event` field.                                                                     |
| `additionalProperties`                                                                                             | Record<string, *any*>                                                                                              | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |