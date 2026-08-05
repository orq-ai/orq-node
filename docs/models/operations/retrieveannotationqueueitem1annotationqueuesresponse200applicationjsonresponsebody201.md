# RetrieveAnnotationQueueItem1AnnotationQueuesResponse200ApplicationJSONResponseBody201

A text input to the model.

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItem1AnnotationQueuesResponse200ApplicationJSONResponseBody201,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItem1AnnotationQueuesResponse200ApplicationJSONResponseBody201 =
    {
      text: "<value>",
    };
```

## Fields

| Field                                                                                                                                                                                                                      | Type                                                                                                                                                                                                                       | Required                                                                                                                                                                                                                   | Description                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                                                     | [operations.RetrieveAnnotationQueueItem1AnnotationQueuesResponse200ApplicationJSONResponseBody20Type](../../models/operations/retrieveannotationqueueitem1annotationqueuesresponse200applicationjsonresponsebody20type.md) | :heavy_minus_sign:                                                                                                                                                                                                         | The type of the input item. Always `input_text`.                                                                                                                                                                           |
| `text`                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                                         | The text input to the model.                                                                                                                                                                                               |