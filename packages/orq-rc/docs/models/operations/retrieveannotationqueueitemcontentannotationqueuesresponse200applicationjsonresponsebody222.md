# RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody222

A text output from the model.

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody222,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody222 =
    {
      text: "<value>",
      annotations: [],
      logprobs: [
        {
          token: "<value>",
          logprob: 8962.66,
          bytes: [
            732659,
            839195,
            916898,
          ],
          topLogprobs: [
            {
              token: "<value>",
              logprob: 7432.05,
              bytes: [
                544969,
                982652,
              ],
            },
          ],
        },
      ],
    };
```

## Fields

| Field                                                                                                                                                                                                                                                                                            | Type                                                                                                                                                                                                                                                                                             | Required                                                                                                                                                                                                                                                                                         | Description                                                                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                                                                                                                                                           | [operations.RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody22AttributesOpenresponsesOutputType](../../models/operations/retrieveannotationqueueitemcontentannotationqueuesresponse200applicationjsonresponsebody22attributesopenresponsesoutputtype.md) | :heavy_minus_sign:                                                                                                                                                                                                                                                                               | The type of the output text. Always `output_text`.                                                                                                                                                                                                                                               |
| `text`                                                                                                                                                                                                                                                                                           | *string*                                                                                                                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                                                                                               | The text output from the model.                                                                                                                                                                                                                                                                  |
| `annotations`                                                                                                                                                                                                                                                                                    | [operations.RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody22Annotations](../../models/operations/retrieveannotationqueueitemcontentannotationqueuesresponse200applicationjsonresponsebody22annotations.md)[]                                           | :heavy_check_mark:                                                                                                                                                                                                                                                                               | The annotations of the text output.                                                                                                                                                                                                                                                              |
| `logprobs`                                                                                                                                                                                                                                                                                       | [operations.RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody22Logprobs](../../models/operations/retrieveannotationqueueitemcontentannotationqueuesresponse200applicationjsonresponsebody22logprobs.md)[]                                                 | :heavy_check_mark:                                                                                                                                                                                                                                                                               | N/A                                                                                                                                                                                                                                                                                              |