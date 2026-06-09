# ResponseReasoningDeltaStreamEventData

The event payload.

## Example Usage

```typescript
import { ResponseReasoningDeltaStreamEventData } from "@orq-ai/node/models/components";

let value: ResponseReasoningDeltaStreamEventData = {
  contentIndex: 152962,
  delta: "<value>",
  itemId: "<id>",
  outputIndex: 557227,
  sequenceNumber: 133929,
  type: "response.reasoning.delta",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `contentIndex`                                                                                                       | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | Index of the content part within the output item.                                                                    |
| `delta`                                                                                                              | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | Incremental text or argument chunk.                                                                                  |
| `itemId`                                                                                                             | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | ID of the output item this event refers to.                                                                          |
| `obfuscation`                                                                                                        | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | Obfuscation padding accompanying the delta, when present.                                                            |
| `outputIndex`                                                                                                        | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | Index of the output item in the response output array.                                                               |
| `sequenceNumber`                                                                                                     | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | Monotonically increasing sequence number for ordering events.                                                        |
| `type`                                                                                                               | [components.ResponseReasoningDeltaStreamEventType](../../models/components/responsereasoningdeltastreameventtype.md) | :heavy_check_mark:                                                                                                   | The event type. Matches the SSE `event` field.                                                                       |
| `additionalProperties`                                                                                               | Record<string, *any*>                                                                                                | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |