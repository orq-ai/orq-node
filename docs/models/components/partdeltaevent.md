# PartDeltaEvent

Emitted for each content chunk streamed from the LLM. The delta field contains a discriminated union based on the kind field.

## Example Usage

```typescript
import { PartDeltaEvent } from "@orq-ai/node/models/components";

let value: PartDeltaEvent = {
  type: "part.delta",
  timestamp: "<value>",
  data: {
    partId: "text_01hxyz123abc",
    delta: {
      kind: "data",
      data: {
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
      },
    },
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `type`                                                                         | *"part.delta"*                                                                 | :heavy_check_mark:                                                             | N/A                                                                            |
| `timestamp`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | ISO timestamp of when the event occurred                                       |
| `data`                                                                         | [components.PartDeltaEventData](../../models/components/partdeltaeventdata.md) | :heavy_check_mark:                                                             | N/A                                                                            |