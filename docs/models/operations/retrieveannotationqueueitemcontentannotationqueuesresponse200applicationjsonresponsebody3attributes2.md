# RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody3Attributes2

A text output from the model.

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody3Attributes2,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody3Attributes2 =
    {
      text: "<value>",
      annotations: [],
      logprobs: [
        {
          token: "<value>",
          logprob: 8474.41,
          bytes: [],
          topLogprobs: [
            {
              token: "<value>",
              logprob: 1800.78,
              bytes: [
                986070,
                168085,
                928766,
              ],
            },
          ],
        },
      ],
    };
```

## Fields

| Field                                                                                                                                                                                                                                                                                              | Type                                                                                                                                                                                                                                                                                               | Required                                                                                                                                                                                                                                                                                           | Description                                                                                                                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                                                                                                                             | [operations.RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody3AttributesOpenresponsesOutput42Type](../../models/operations/retrieveannotationqueueitemcontentannotationqueuesresponse200applicationjsonresponsebody3attributesopenresponsesoutput42type.md) | :heavy_minus_sign:                                                                                                                                                                                                                                                                                 | The type of the output text. Always `output_text`.                                                                                                                                                                                                                                                 |
| `text`                                                                                                                                                                                                                                                                                             | *string*                                                                                                                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                                                                                                                 | The text output from the model.                                                                                                                                                                                                                                                                    |
| `annotations`                                                                                                                                                                                                                                                                                      | [operations.RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONAnnotations](../../models/operations/retrieveannotationqueueitemcontentannotationqueuesresponse200applicationjsonannotations.md)[]                                                                         | :heavy_check_mark:                                                                                                                                                                                                                                                                                 | The annotations of the text output.                                                                                                                                                                                                                                                                |
| `logprobs`                                                                                                                                                                                                                                                                                         | [operations.RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONLogprobs](../../models/operations/retrieveannotationqueueitemcontentannotationqueuesresponse200applicationjsonlogprobs.md)[]                                                                               | :heavy_check_mark:                                                                                                                                                                                                                                                                                 | N/A                                                                                                                                                                                                                                                                                                |