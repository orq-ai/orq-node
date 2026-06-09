# ResponseRefusalDoneStreamEventData

The event payload.

## Example Usage

```typescript
import { ResponseRefusalDoneStreamEventData } from "@orq-ai/node/models/components";

let value: ResponseRefusalDoneStreamEventData = {
  contentIndex: 217864,
  itemId: "<id>",
  outputIndex: 178998,
  refusal: "<value>",
  sequenceNumber: 91899,
  type: "response.refusal.done",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `contentIndex`                                                                                                 | *number*                                                                                                       | :heavy_check_mark:                                                                                             | Index of the content part within the output item.                                                              |
| `itemId`                                                                                                       | *string*                                                                                                       | :heavy_check_mark:                                                                                             | ID of the output item this event refers to.                                                                    |
| `outputIndex`                                                                                                  | *number*                                                                                                       | :heavy_check_mark:                                                                                             | Index of the output item in the response output array.                                                         |
| `refusal`                                                                                                      | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The completed refusal text.                                                                                    |
| `sequenceNumber`                                                                                               | *number*                                                                                                       | :heavy_check_mark:                                                                                             | Monotonically increasing sequence number for ordering events.                                                  |
| `type`                                                                                                         | [components.ResponseRefusalDoneStreamEventType](../../models/components/responserefusaldonestreameventtype.md) | :heavy_check_mark:                                                                                             | The event type. Matches the SSE `event` field.                                                                 |
| `additionalProperties`                                                                                         | Record<string, *any*>                                                                                          | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |