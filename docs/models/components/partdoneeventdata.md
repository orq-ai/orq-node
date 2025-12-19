# PartDoneEventData

## Example Usage

```typescript
import { PartDoneEventData } from "@orq-ai/node/models/components";

let value: PartDoneEventData = {
  partId: "text_01hxyz123abc",
  part: {
    kind: "data",
    data: {
      "key": "<value>",
    },
  },
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 | Example                                                                     |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `partId`                                                                    | *string*                                                                    | :heavy_check_mark:                                                          | Unique identifier for this part. Matches the partId from part.delta events. | text_01hxyz123abc                                                           |
| `part`                                                                      | *any*                                                                       | :heavy_check_mark:                                                          | N/A                                                                         |                                                                             |