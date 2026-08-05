# RetrieveAnnotationQueueItem2AnnotationQueuesResponse200ApplicationJSONResponseBody2

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItem2AnnotationQueuesResponse200ApplicationJSONResponseBody2,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItem2AnnotationQueuesResponse200ApplicationJSONResponseBody2 =
    {
      type: "image_url",
      imageUrl: {
        url: "https://picsum.photos/id/1/200/300",
      },
    };
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                                   | *"image_url"*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `imageUrl`                                                                                                                                                               | [operations.RetrieveAnnotationQueueItem2AnnotationQueuesResponse200ImageUrl](../../models/operations/retrieveannotationqueueitem2annotationqueuesresponse200imageurl.md) | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |