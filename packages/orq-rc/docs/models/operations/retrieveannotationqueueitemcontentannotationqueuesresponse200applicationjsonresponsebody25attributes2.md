# RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody25Attributes2

A text output from the model.

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody25Attributes2,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody25Attributes2 =
    {
      text: "<value>",
      annotations: [],
      logprobs: [
        {
          token: "<value>",
          logprob: 536.44,
          bytes: [],
          topLogprobs: [
            {
              token: "<value>",
              logprob: 2513.86,
              bytes: [
                626546,
                743713,
              ],
            },
          ],
        },
      ],
    };
```

## Fields

| Field                                                                                                                                                                                                                                                                                                | Type                                                                                                                                                                                                                                                                                                 | Required                                                                                                                                                                                                                                                                                             | Description                                                                                                                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                                                                                                                               | [operations.RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody25AttributesOpenresponsesOutput42Type](../../models/operations/retrieveannotationqueueitemcontentannotationqueuesresponse200applicationjsonresponsebody25attributesopenresponsesoutput42type.md) | :heavy_minus_sign:                                                                                                                                                                                                                                                                                   | The type of the output text. Always `output_text`.                                                                                                                                                                                                                                                   |
| `text`                                                                                                                                                                                                                                                                                               | *string*                                                                                                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                                                                                   | The text output from the model.                                                                                                                                                                                                                                                                      |
| `annotations`                                                                                                                                                                                                                                                                                        | [operations.RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody25AttributesAnnotations](../../models/operations/retrieveannotationqueueitemcontentannotationqueuesresponse200applicationjsonresponsebody25attributesannotations.md)[]                           | :heavy_check_mark:                                                                                                                                                                                                                                                                                   | The annotations of the text output.                                                                                                                                                                                                                                                                  |
| `logprobs`                                                                                                                                                                                                                                                                                           | [operations.RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody25AttributesLogprobs](../../models/operations/retrieveannotationqueueitemcontentannotationqueuesresponse200applicationjsonresponsebody25attributeslogprobs.md)[]                                 | :heavy_check_mark:                                                                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                                                                  |