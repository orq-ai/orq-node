# RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody4Attributes2

A text output from the model.

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody4Attributes2,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody4Attributes2 =
    {
      text: "<value>",
      annotations: [],
      logprobs: [
        {
          token: "<value>",
          logprob: 816.83,
          bytes: [
            68763,
            254364,
          ],
          topLogprobs: [
            {
              token: "<value>",
              logprob: 1160.79,
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
| `type`                                                                                                                                                                                                                                                                                             | [operations.RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody4AttributesOpenresponsesOutput42Type](../../models/operations/retrieveannotationqueueitemcontentannotationqueuesresponse200applicationjsonresponsebody4attributesopenresponsesoutput42type.md) | :heavy_minus_sign:                                                                                                                                                                                                                                                                                 | The type of the output text. Always `output_text`.                                                                                                                                                                                                                                                 |
| `text`                                                                                                                                                                                                                                                                                             | *string*                                                                                                                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                                                                                                                 | The text output from the model.                                                                                                                                                                                                                                                                    |
| `annotations`                                                                                                                                                                                                                                                                                      | [operations.RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody4Annotations](../../models/operations/retrieveannotationqueueitemcontentannotationqueuesresponse200applicationjsonresponsebody4annotations.md)[]                                               | :heavy_check_mark:                                                                                                                                                                                                                                                                                 | The annotations of the text output.                                                                                                                                                                                                                                                                |
| `logprobs`                                                                                                                                                                                                                                                                                         | [operations.RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody4Logprobs](../../models/operations/retrieveannotationqueueitemcontentannotationqueuesresponse200applicationjsonresponsebody4logprobs.md)[]                                                     | :heavy_check_mark:                                                                                                                                                                                                                                                                                 | N/A                                                                                                                                                                                                                                                                                                |