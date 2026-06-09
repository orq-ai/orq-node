# ResponseHostedToolCallStreamEventData

The event payload.

## Example Usage

```typescript
import { ResponseHostedToolCallStreamEventData } from "@orq-ai/node/models/components";

let value: ResponseHostedToolCallStreamEventData = {
  itemId: "<id>",
  outputIndex: 19719,
  sequenceNumber: 702707,
  type: "response.mcp_call.in_progress",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `itemId`                                                                                                             | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | ID of the output item this event refers to.                                                                          |
| `outputIndex`                                                                                                        | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | Index of the output item in the response output array.                                                               |
| `sequenceNumber`                                                                                                     | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | Monotonically increasing sequence number for ordering events.                                                        |
| `type`                                                                                                               | [components.ResponseHostedToolCallStreamEventType](../../models/components/responsehostedtoolcallstreameventtype.md) | :heavy_check_mark:                                                                                                   | The event type. Matches the SSE `event` field.                                                                       |
| `additionalProperties`                                                                                               | Record<string, *any*>                                                                                                | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |