# ResponseFunctionCallArgumentsDeltaStreamEventData

The event payload.

## Example Usage

```typescript
import { ResponseFunctionCallArgumentsDeltaStreamEventData } from "@orq-ai/node/models/components";

let value: ResponseFunctionCallArgumentsDeltaStreamEventData = {
  delta: "<value>",
  itemId: "<id>",
  outputIndex: 147449,
  sequenceNumber: 558745,
  type: "response.function_call_arguments.delta",
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `delta`                                                                                                                                      | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | Incremental text or argument chunk.                                                                                                          |
| `itemId`                                                                                                                                     | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | ID of the output item this event refers to.                                                                                                  |
| `obfuscation`                                                                                                                                | *string*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | Obfuscation padding accompanying the delta, when present.                                                                                    |
| `outputIndex`                                                                                                                                | *number*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | Index of the output item in the response output array.                                                                                       |
| `sequenceNumber`                                                                                                                             | *number*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | Monotonically increasing sequence number for ordering events.                                                                                |
| `type`                                                                                                                                       | [components.ResponseFunctionCallArgumentsDeltaStreamEventType](../../models/components/responsefunctioncallargumentsdeltastreameventtype.md) | :heavy_check_mark:                                                                                                                           | The event type. Matches the SSE `event` field.                                                                                               |
| `additionalProperties`                                                                                                                       | Record<string, *any*>                                                                                                                        | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |