# RetrieveAnnotationQueueItem1AnnotationQueues1

A text input to the model.

## Example Usage

```typescript
import { RetrieveAnnotationQueueItem1AnnotationQueues1 } from "@orq-ai/node/models/operations";

let value: RetrieveAnnotationQueueItem1AnnotationQueues1 = {
  text: "<value>",
};
```

## Fields

| Field                                                                                                                                                                                                                  | Type                                                                                                                                                                                                                   | Required                                                                                                                                                                                                               | Description                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                                                 | [operations.RetrieveAnnotationQueueItem1AnnotationQueuesResponse200ApplicationJSONResponseBodyType](../../models/operations/retrieveannotationqueueitem1annotationqueuesresponse200applicationjsonresponsebodytype.md) | :heavy_minus_sign:                                                                                                                                                                                                     | The type of the input item. Always `input_text`.                                                                                                                                                                       |
| `text`                                                                                                                                                                                                                 | *string*                                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                                     | The text input to the model.                                                                                                                                                                                           |