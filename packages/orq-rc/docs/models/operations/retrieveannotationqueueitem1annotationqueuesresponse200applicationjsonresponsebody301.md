# RetrieveAnnotationQueueItem1AnnotationQueuesResponse200ApplicationJSONResponseBody301

A text input to the model.

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItem1AnnotationQueuesResponse200ApplicationJSONResponseBody301,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItem1AnnotationQueuesResponse200ApplicationJSONResponseBody301 =
    {
      text: "<value>",
    };
```

## Fields

| Field                                                                                                                                                                                                                      | Type                                                                                                                                                                                                                       | Required                                                                                                                                                                                                                   | Description                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                                                     | [operations.RetrieveAnnotationQueueItem1AnnotationQueuesResponse200ApplicationJSONResponseBody30Type](../../models/operations/retrieveannotationqueueitem1annotationqueuesresponse200applicationjsonresponsebody30type.md) | :heavy_minus_sign:                                                                                                                                                                                                         | The type of the input item. Always `input_text`.                                                                                                                                                                           |
| `text`                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                                         | The text input to the model.                                                                                                                                                                                               |