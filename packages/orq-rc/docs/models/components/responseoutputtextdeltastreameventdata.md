# ResponseOutputTextDeltaStreamEventData

The event payload.

## Example Usage

```typescript
import { ResponseOutputTextDeltaStreamEventData } from "@orq-ai/node/models/components";

let value: ResponseOutputTextDeltaStreamEventData = {
  contentIndex: 96353,
  delta: "<value>",
  itemId: "<id>",
  logprobs: [
    {
      "key": "<value>",
    },
    {},
  ],
  outputIndex: 147571,
  sequenceNumber: 737760,
  type: "response.output_text.delta",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `contentIndex`                                                                                                         | *number*                                                                                                               | :heavy_check_mark:                                                                                                     | Index of the content part within the output item.                                                                      |
| `delta`                                                                                                                | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | Incremental text or argument chunk.                                                                                    |
| `itemId`                                                                                                               | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | ID of the output item this event refers to.                                                                            |
| `logprobs`                                                                                                             | Record<string, *any*>[]                                                                                                | :heavy_check_mark:                                                                                                     | Log probability information for the emitted tokens.                                                                    |
| `obfuscation`                                                                                                          | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | Obfuscation padding accompanying the delta, when present.                                                              |
| `outputIndex`                                                                                                          | *number*                                                                                                               | :heavy_check_mark:                                                                                                     | Index of the output item in the response output array.                                                                 |
| `sequenceNumber`                                                                                                       | *number*                                                                                                               | :heavy_check_mark:                                                                                                     | Monotonically increasing sequence number for ordering events.                                                          |
| `type`                                                                                                                 | [components.ResponseOutputTextDeltaStreamEventType](../../models/components/responseoutputtextdeltastreameventtype.md) | :heavy_check_mark:                                                                                                     | The event type. Matches the SSE `event` field.                                                                         |
| `additionalProperties`                                                                                                 | Record<string, *any*>                                                                                                  | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |