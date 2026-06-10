# ResponseOutputTextAnnotationAddedStreamEvent

A `response.output_text.annotation.added` server-sent event.

## Example Usage

```typescript
import { ResponseOutputTextAnnotationAddedStreamEvent } from "@orq-ai/node/models/components";

let value: ResponseOutputTextAnnotationAddedStreamEvent = {
  annotation: {},
  annotationIndex: 123864,
  contentIndex: 245065,
  itemId: "<id>",
  outputIndex: 704135,
  sequenceNumber: 177705,
  type: "response.output_text.annotation.added",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `annotation`                                                  | Record<string, *any*>                                         | :heavy_check_mark:                                            | The annotation added to the output text.                      |
| `annotationIndex`                                             | *number*                                                      | :heavy_check_mark:                                            | Index of the annotation within the content part.              |
| `contentIndex`                                                | *number*                                                      | :heavy_check_mark:                                            | Index of the content part within the output item.             |
| `itemId`                                                      | *string*                                                      | :heavy_check_mark:                                            | ID of the output item this event refers to.                   |
| `outputIndex`                                                 | *number*                                                      | :heavy_check_mark:                                            | Index of the output item in the response output array.        |
| `sequenceNumber`                                              | *number*                                                      | :heavy_check_mark:                                            | Monotonically increasing sequence number for ordering events. |
| `type`                                                        | *"response.output_text.annotation.added"*                     | :heavy_check_mark:                                            | The event type. Discriminates the payload.                    |
| `additionalProperties`                                        | Record<string, *any*>                                         | :heavy_minus_sign:                                            | N/A                                                           |