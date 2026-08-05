# RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody10Attributes1

A text input to the model.

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody10Attributes1,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody10Attributes1 =
    {
      text: "<value>",
    };
```

## Fields

| Field                                                                                                                                                                                                                                  | Type                                                                                                                                                                                                                                   | Required                                                                                                                                                                                                                               | Description                                                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                                                                 | [operations.RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody10Type](../../models/operations/retrieveannotationqueueitemcontentannotationqueuesresponse200applicationjsonresponsebody10type.md) | :heavy_minus_sign:                                                                                                                                                                                                                     | The type of the input item. Always `input_text`.                                                                                                                                                                                       |
| `text`                                                                                                                                                                                                                                 | *string*                                                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                                                     | The text input to the model.                                                                                                                                                                                                           |