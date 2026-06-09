# ResponseOutputTextAnnotationAddedStreamEvent

## Example Usage

```typescript
import { ResponseOutputTextAnnotationAddedStreamEvent } from "@orq-ai/node/models/components";

let value: ResponseOutputTextAnnotationAddedStreamEvent = {
  data: {
    annotation: {},
    annotationIndex: 123864,
    contentIndex: 245065,
    itemId: "<id>",
    outputIndex: 704135,
    sequenceNumber: 177705,
    type: "response.output_text.annotation.added",
  },
  event: "response.output_text.annotation.added",
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `data`                                                                                                                                     | [components.ResponseOutputTextAnnotationAddedStreamEventData](../../models/components/responseoutputtextannotationaddedstreameventdata.md) | :heavy_check_mark:                                                                                                                         | The event payload.                                                                                                                         |
| `event`                                                                                                                                    | *"response.output_text.annotation.added"*                                                                                                  | :heavy_check_mark:                                                                                                                         | The SSE event name, equal to the payload's `type`.                                                                                         |