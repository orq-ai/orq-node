# ResponseFileSearchCallSearchingStreamEvent

A `response.file_search_call.searching` server-sent event.

## Example Usage

```typescript
import { ResponseFileSearchCallSearchingStreamEvent } from "@orq-ai/node/models/components";

let value: ResponseFileSearchCallSearchingStreamEvent = {
  itemId: "<id>",
  outputIndex: 803863,
  sequenceNumber: 589079,
  type: "response.file_search_call.searching",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `itemId`                                                      | *string*                                                      | :heavy_check_mark:                                            | ID of the output item this event refers to.                   |
| `outputIndex`                                                 | *number*                                                      | :heavy_check_mark:                                            | Index of the output item in the response output array.        |
| `sequenceNumber`                                              | *number*                                                      | :heavy_check_mark:                                            | Monotonically increasing sequence number for ordering events. |
| `type`                                                        | *"response.file_search_call.searching"*                       | :heavy_check_mark:                                            | The event type. Discriminates the payload.                    |
| `additionalProperties`                                        | Record<string, *any*>                                         | :heavy_minus_sign:                                            | N/A                                                           |