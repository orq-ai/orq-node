# CreateConversationResponseResponseStreamingEventData

## Example Usage

```typescript
import { CreateConversationResponseResponseStreamingEventData } from "@orq-ai/node/models/operations";

let value: CreateConversationResponseResponseStreamingEventData = {
  partId: "text_01hxyz123abc",
  part: {
    kind: "text",
    text: "<value>",
  },
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 | Example                                                                     |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `partId`                                                                    | *string*                                                                    | :heavy_check_mark:                                                          | Unique identifier for this part. Matches the partId from part.delta events. | text_01hxyz123abc                                                           |
| `part`                                                                      | *any*                                                                       | :heavy_check_mark:                                                          | N/A                                                                         |                                                                             |