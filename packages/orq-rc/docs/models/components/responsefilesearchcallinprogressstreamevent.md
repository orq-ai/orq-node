# ResponseFileSearchCallInProgressStreamEvent

A `response.file_search_call.in_progress` server-sent event.

## Example Usage

```typescript
import { ResponseFileSearchCallInProgressStreamEvent } from "@orq-ai/node/models/components";

let value: ResponseFileSearchCallInProgressStreamEvent = {
  itemId: "<id>",
  outputIndex: 381120,
  sequenceNumber: 313210,
  type: "response.file_search_call.in_progress",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `itemId`                                                      | *string*                                                      | :heavy_check_mark:                                            | ID of the output item this event refers to.                   |
| `outputIndex`                                                 | *number*                                                      | :heavy_check_mark:                                            | Index of the output item in the response output array.        |
| `sequenceNumber`                                              | *number*                                                      | :heavy_check_mark:                                            | Monotonically increasing sequence number for ordering events. |
| `type`                                                        | *"response.file_search_call.in_progress"*                     | :heavy_check_mark:                                            | The event type. Discriminates the payload.                    |
| `additionalProperties`                                        | Record<string, *any*>                                         | :heavy_minus_sign:                                            | N/A                                                           |