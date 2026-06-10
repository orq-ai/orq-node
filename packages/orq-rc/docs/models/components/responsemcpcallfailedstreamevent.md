# ResponseMCPCallFailedStreamEvent

A `response.mcp_call.failed` server-sent event.

## Example Usage

```typescript
import { ResponseMCPCallFailedStreamEvent } from "@orq-ai/node/models/components";

let value: ResponseMCPCallFailedStreamEvent = {
  itemId: "<id>",
  outputIndex: 665534,
  sequenceNumber: 895265,
  type: "response.mcp_call.failed",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `itemId`                                                      | *string*                                                      | :heavy_check_mark:                                            | ID of the output item this event refers to.                   |
| `outputIndex`                                                 | *number*                                                      | :heavy_check_mark:                                            | Index of the output item in the response output array.        |
| `sequenceNumber`                                              | *number*                                                      | :heavy_check_mark:                                            | Monotonically increasing sequence number for ordering events. |
| `type`                                                        | *"response.mcp_call.failed"*                                  | :heavy_check_mark:                                            | The event type. Discriminates the payload.                    |
| `additionalProperties`                                        | Record<string, *any*>                                         | :heavy_minus_sign:                                            | N/A                                                           |