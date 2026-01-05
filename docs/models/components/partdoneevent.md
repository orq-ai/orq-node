# PartDoneEvent

Emitted when a part has been fully streamed. Contains the complete part with all content.

## Example Usage

```typescript
import { PartDoneEvent } from "@orq-ai/node/models/components";

let value: PartDoneEvent = {
  type: "part.done",
  timestamp: "<value>",
  data: {
    partId: "text_01hxyz123abc",
    part: {
      kind: "data",
      data: {
        "key": "<value>",
      },
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `type`                                                                       | *"part.done"*                                                                | :heavy_check_mark:                                                           | N/A                                                                          |
| `timestamp`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | ISO timestamp of when the event occurred                                     |
| `data`                                                                       | [components.PartDoneEventData](../../models/components/partdoneeventdata.md) | :heavy_check_mark:                                                           | N/A                                                                          |