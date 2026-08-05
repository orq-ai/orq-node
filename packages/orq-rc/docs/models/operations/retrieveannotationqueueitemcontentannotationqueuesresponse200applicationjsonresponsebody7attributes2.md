# RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody7Attributes2

A text output from the model.

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody7Attributes2,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody7Attributes2 =
    {
      text: "<value>",
      annotations: [],
      logprobs: [
        {
          token: "<value>",
          logprob: 6586.86,
          bytes: [
            337351,
          ],
          topLogprobs: [
            {
              token: "<value>",
              logprob: 5662.75,
              bytes: [],
            },
          ],
        },
      ],
    };
```

## Fields

| Field                                                                                                                                                                                                                                                                                              | Type                                                                                                                                                                                                                                                                                               | Required                                                                                                                                                                                                                                                                                           | Description                                                                                                                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                                                                                                                             | [operations.RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody7AttributesOpenresponsesOutput42Type](../../models/operations/retrieveannotationqueueitemcontentannotationqueuesresponse200applicationjsonresponsebody7attributesopenresponsesoutput42type.md) | :heavy_minus_sign:                                                                                                                                                                                                                                                                                 | The type of the output text. Always `output_text`.                                                                                                                                                                                                                                                 |
| `text`                                                                                                                                                                                                                                                                                             | *string*                                                                                                                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                                                                                                                 | The text output from the model.                                                                                                                                                                                                                                                                    |
| `annotations`                                                                                                                                                                                                                                                                                      | [operations.RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody7AttributesAnnotations](../../models/operations/retrieveannotationqueueitemcontentannotationqueuesresponse200applicationjsonresponsebody7attributesannotations.md)[]                           | :heavy_check_mark:                                                                                                                                                                                                                                                                                 | The annotations of the text output.                                                                                                                                                                                                                                                                |
| `logprobs`                                                                                                                                                                                                                                                                                         | [operations.RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody7AttributesLogprobs](../../models/operations/retrieveannotationqueueitemcontentannotationqueuesresponse200applicationjsonresponsebody7attributeslogprobs.md)[]                                 | :heavy_check_mark:                                                                                                                                                                                                                                                                                 | N/A                                                                                                                                                                                                                                                                                                |