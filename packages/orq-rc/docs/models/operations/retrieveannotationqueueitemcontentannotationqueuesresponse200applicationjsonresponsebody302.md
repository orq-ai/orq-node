# RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody302

A text output from the model.

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody302,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody302 =
    {
      text: "<value>",
      annotations: [
        {
          url: "https://dutiful-pliers.biz",
          startIndex: 426601,
          endIndex: 573917,
          title: "<value>",
        },
      ],
      logprobs: [
        {
          token: "<value>",
          logprob: 5973.32,
          bytes: [
            277110,
            766037,
          ],
          topLogprobs: [
            {
              token: "<value>",
              logprob: 3875.47,
              bytes: [
                932658,
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
| `type`                                                                                                                                                                                                                                                                                           | [operations.RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody30AttributesOpenresponsesOutputType](../../models/operations/retrieveannotationqueueitemcontentannotationqueuesresponse200applicationjsonresponsebody30attributesopenresponsesoutputtype.md) | :heavy_minus_sign:                                                                                                                                                                                                                                                                               | The type of the output text. Always `output_text`.                                                                                                                                                                                                                                               |
| `text`                                                                                                                                                                                                                                                                                           | *string*                                                                                                                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                                                                                               | The text output from the model.                                                                                                                                                                                                                                                                  |
| `annotations`                                                                                                                                                                                                                                                                                    | [operations.RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody30Annotations](../../models/operations/retrieveannotationqueueitemcontentannotationqueuesresponse200applicationjsonresponsebody30annotations.md)[]                                           | :heavy_check_mark:                                                                                                                                                                                                                                                                               | The annotations of the text output.                                                                                                                                                                                                                                                              |
| `logprobs`                                                                                                                                                                                                                                                                                       | [operations.RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody30Logprobs](../../models/operations/retrieveannotationqueueitemcontentannotationqueuesresponse200applicationjsonresponsebody30logprobs.md)[]                                                 | :heavy_check_mark:                                                                                                                                                                                                                                                                               | N/A                                                                                                                                                                                                                                                                                              |