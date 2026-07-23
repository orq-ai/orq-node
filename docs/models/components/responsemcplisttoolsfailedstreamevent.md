# ResponseMCPListToolsFailedStreamEvent

A `response.mcp_list_tools.failed` server-sent event.

## Example Usage

```typescript
import { ResponseMCPListToolsFailedStreamEvent } from "@orq-ai/node/models/components";

let value: ResponseMCPListToolsFailedStreamEvent = {
  itemId: "<id>",
  outputIndex: 69290,
  sequenceNumber: 747779,
  type: "response.mcp_list_tools.failed",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `itemId`                                                      | *string*                                                      | :heavy_check_mark:                                            | ID of the output item this event refers to.                   |
| `outputIndex`                                                 | *number*                                                      | :heavy_check_mark:                                            | Index of the output item in the response output array.        |
| `sequenceNumber`                                              | *number*                                                      | :heavy_check_mark:                                            | Monotonically increasing sequence number for ordering events. |
| `type`                                                        | *"response.mcp_list_tools.failed"*                            | :heavy_check_mark:                                            | The event type. Discriminates the payload.                    |
| `additionalProperties`                                        | Record<string, *any*>                                         | :heavy_minus_sign:                                            | N/A                                                           |