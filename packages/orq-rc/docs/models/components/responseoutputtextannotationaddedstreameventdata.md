# ResponseOutputTextAnnotationAddedStreamEventData

The event payload.

## Example Usage

```typescript
import { ResponseOutputTextAnnotationAddedStreamEventData } from "@orq-ai/node/models/components";

let value: ResponseOutputTextAnnotationAddedStreamEventData = {
  annotation: {},
  annotationIndex: 941150,
  contentIndex: 666853,
  itemId: "<id>",
  outputIndex: 993861,
  sequenceNumber: 632285,
  type: "response.output_text.annotation.added",
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `annotation`                                                                                                                               | Record<string, *any*>                                                                                                                      | :heavy_check_mark:                                                                                                                         | The annotation added to the output text.                                                                                                   |
| `annotationIndex`                                                                                                                          | *number*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | Index of the annotation within the content part.                                                                                           |
| `contentIndex`                                                                                                                             | *number*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | Index of the content part within the output item.                                                                                          |
| `itemId`                                                                                                                                   | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | ID of the output item this event refers to.                                                                                                |
| `outputIndex`                                                                                                                              | *number*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | Index of the output item in the response output array.                                                                                     |
| `sequenceNumber`                                                                                                                           | *number*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | Monotonically increasing sequence number for ordering events.                                                                              |
| `type`                                                                                                                                     | [components.ResponseOutputTextAnnotationAddedStreamEventType](../../models/components/responseoutputtextannotationaddedstreameventtype.md) | :heavy_check_mark:                                                                                                                         | The event type. Matches the SSE `event` field.                                                                                             |
| `additionalProperties`                                                                                                                     | Record<string, *any*>                                                                                                                      | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |