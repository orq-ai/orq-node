# RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody21

A text input to the model.

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody21,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody21 =
    {
      text: "<value>",
    };
```

## Fields

| Field                                                                                                                                                                                                                                | Type                                                                                                                                                                                                                                 | Required                                                                                                                                                                                                                             | Description                                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                                                                                               | [operations.RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody2Type](../../models/operations/retrieveannotationqueueitemcontentannotationqueuesresponse200applicationjsonresponsebody2type.md) | :heavy_minus_sign:                                                                                                                                                                                                                   | The type of the input item. Always `input_text`.                                                                                                                                                                                     |
| `text`                                                                                                                                                                                                                               | *string*                                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                   | The text input to the model.                                                                                                                                                                                                         |