# ResponseWebSearchCallSearchingStreamEvent

A `response.web_search_call.searching` server-sent event.

## Example Usage

```typescript
import { ResponseWebSearchCallSearchingStreamEvent } from "@orq-ai/node/models/components";

let value: ResponseWebSearchCallSearchingStreamEvent = {
  itemId: "<id>",
  outputIndex: 24737,
  sequenceNumber: 314478,
  type: "response.web_search_call.searching",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `itemId`                                                      | *string*                                                      | :heavy_check_mark:                                            | ID of the output item this event refers to.                   |
| `outputIndex`                                                 | *number*                                                      | :heavy_check_mark:                                            | Index of the output item in the response output array.        |
| `sequenceNumber`                                              | *number*                                                      | :heavy_check_mark:                                            | Monotonically increasing sequence number for ordering events. |
| `type`                                                        | *"response.web_search_call.searching"*                        | :heavy_check_mark:                                            | The event type. Discriminates the payload.                    |
| `additionalProperties`                                        | Record<string, *any*>                                         | :heavy_minus_sign:                                            | N/A                                                           |