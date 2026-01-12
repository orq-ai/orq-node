# PartDoneEvent

Emitted when a part has been fully streamed. Contains the complete part with all content.

## Example Usage

```typescript
import { PartDoneEvent } from "@orq-ai/node/models/operations";

let value: PartDoneEvent = {
  type: "part.done",
  timestamp: "<value>",
  data: {
    partId: "text_01hxyz123abc",
    part: {
      kind: "text",
      text: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                             | [operations.CreateConversationResponseResponseStreamingEventType](../../models/operations/createconversationresponseresponsestreamingeventtype.md) | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `timestamp`                                                                                                                                        | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | ISO timestamp of when the event occurred                                                                                                           |
| `data`                                                                                                                                             | [operations.CreateConversationResponseResponseStreamingEventData](../../models/operations/createconversationresponseresponsestreamingeventdata.md) | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |