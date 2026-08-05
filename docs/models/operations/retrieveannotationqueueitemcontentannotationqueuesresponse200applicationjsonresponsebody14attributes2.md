# RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody14Attributes2

A text output from the model.

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody14Attributes2,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody14Attributes2 =
    {
      text: "<value>",
      annotations: [
        {
          url: "https://insidious-restaurant.org/",
          startIndex: 445697,
          endIndex: 916801,
          title: "<value>",
        },
      ],
      logprobs: [
        {
          token: "<value>",
          logprob: 3781.72,
          bytes: [
            453591,
          ],
          topLogprobs: [
            {
              token: "<value>",
              logprob: 6877.58,
              bytes: [
                344124,
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
| `type`                                                                                                                                                                                                                                                                                               | [operations.RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody14AttributesOpenresponsesOutput42Type](../../models/operations/retrieveannotationqueueitemcontentannotationqueuesresponse200applicationjsonresponsebody14attributesopenresponsesoutput42type.md) | :heavy_minus_sign:                                                                                                                                                                                                                                                                                   | The type of the output text. Always `output_text`.                                                                                                                                                                                                                                                   |
| `text`                                                                                                                                                                                                                                                                                               | *string*                                                                                                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                                                                                   | The text output from the model.                                                                                                                                                                                                                                                                      |
| `annotations`                                                                                                                                                                                                                                                                                        | [operations.RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody14AttributesAnnotations](../../models/operations/retrieveannotationqueueitemcontentannotationqueuesresponse200applicationjsonresponsebody14attributesannotations.md)[]                           | :heavy_check_mark:                                                                                                                                                                                                                                                                                   | The annotations of the text output.                                                                                                                                                                                                                                                                  |
| `logprobs`                                                                                                                                                                                                                                                                                           | [operations.RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody14AttributesLogprobs](../../models/operations/retrieveannotationqueueitemcontentannotationqueuesresponse200applicationjsonresponsebody14attributeslogprobs.md)[]                                 | :heavy_check_mark:                                                                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                                                                  |