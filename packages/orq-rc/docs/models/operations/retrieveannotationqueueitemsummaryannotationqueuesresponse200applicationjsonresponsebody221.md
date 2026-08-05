# RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONResponseBody221

A text input to the model.

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONResponseBody221,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONResponseBody221 =
    {
      text: "<value>",
    };
```

## Fields

| Field                                                                                                                                                                                                                                  | Type                                                                                                                                                                                                                                   | Required                                                                                                                                                                                                                               | Description                                                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                                                                 | [operations.RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONResponseBody22Type](../../models/operations/retrieveannotationqueueitemsummaryannotationqueuesresponse200applicationjsonresponsebody22type.md) | :heavy_minus_sign:                                                                                                                                                                                                                     | The type of the input item. Always `input_text`.                                                                                                                                                                                       |
| `text`                                                                                                                                                                                                                                 | *string*                                                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                                                     | The text input to the model.                                                                                                                                                                                                           |