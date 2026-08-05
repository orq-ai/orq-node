# RetrieveAnnotationQueueItem1AnnotationQueuesResponse200ApplicationJSONResponseBody311

A text input to the model.

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItem1AnnotationQueuesResponse200ApplicationJSONResponseBody311,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItem1AnnotationQueuesResponse200ApplicationJSONResponseBody311 =
    {
      text: "<value>",
    };
```

## Fields

| Field                                                                                                                                                                                                                      | Type                                                                                                                                                                                                                       | Required                                                                                                                                                                                                                   | Description                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                                                     | [operations.RetrieveAnnotationQueueItem1AnnotationQueuesResponse200ApplicationJSONResponseBody31Type](../../models/operations/retrieveannotationqueueitem1annotationqueuesresponse200applicationjsonresponsebody31type.md) | :heavy_minus_sign:                                                                                                                                                                                                         | The type of the input item. Always `input_text`.                                                                                                                                                                           |
| `text`                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                                         | The text input to the model.                                                                                                                                                                                               |