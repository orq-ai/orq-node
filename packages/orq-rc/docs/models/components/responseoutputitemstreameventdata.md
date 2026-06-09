# ResponseOutputItemStreamEventData

The event payload.

## Example Usage

```typescript
import { ResponseOutputItemStreamEventData } from "@orq-ai/node/models/components";

let value: ResponseOutputItemStreamEventData = {
  item: {},
  outputIndex: 96443,
  sequenceNumber: 217604,
  type: "response.output_item.added",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `item`                                                                                                       | Record<string, *any*>                                                                                        | :heavy_check_mark:                                                                                           | The output item (message, function call, reasoning, etc.).                                                   |
| `outputIndex`                                                                                                | *number*                                                                                                     | :heavy_check_mark:                                                                                           | Index of the output item in the response output array.                                                       |
| `sequenceNumber`                                                                                             | *number*                                                                                                     | :heavy_check_mark:                                                                                           | Monotonically increasing sequence number for ordering events.                                                |
| `type`                                                                                                       | [components.ResponseOutputItemStreamEventType](../../models/components/responseoutputitemstreameventtype.md) | :heavy_check_mark:                                                                                           | The event type. Matches the SSE `event` field.                                                               |
| `additionalProperties`                                                                                       | Record<string, *any*>                                                                                        | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |