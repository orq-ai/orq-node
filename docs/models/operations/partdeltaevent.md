# PartDeltaEvent

Emitted for each content chunk streamed from the LLM. The delta field contains a discriminated union based on the kind field.

## Example Usage

```typescript
import { PartDeltaEvent } from "@orq-ai/node/models/operations";

let value: PartDeltaEvent = {
  type: "part.delta",
  timestamp: "<value>",
  data: {
    partId: "text_01hxyz123abc",
    delta: {
      kind: "file",
      file: {
        bytes: "<value>",
      },
    },
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `type`                                                                                         | [operations.ResponseStreamingEventType](../../models/operations/responsestreamingeventtype.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `timestamp`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | ISO timestamp of when the event occurred                                                       |
| `data`                                                                                         | [operations.ResponseStreamingEventData](../../models/operations/responsestreamingeventdata.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |