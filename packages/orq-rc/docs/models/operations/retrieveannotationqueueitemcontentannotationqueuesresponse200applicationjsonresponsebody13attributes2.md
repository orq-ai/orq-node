# RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody13Attributes2

A text output from the model.

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody13Attributes2,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody13Attributes2 =
    {
      text: "<value>",
      annotations: [
        {
          url: "https://mad-fat.com/",
          startIndex: 954164,
          endIndex: 696315,
          title: "<value>",
        },
      ],
      logprobs: [
        {
          token: "<value>",
          logprob: 2596.84,
          bytes: [
            546820,
            635867,
            174564,
          ],
          topLogprobs: [],
        },
      ],
    };
```

## Fields

| Field                                                                                                                                                                                                                                                                                                | Type                                                                                                                                                                                                                                                                                                 | Required                                                                                                                                                                                                                                                                                             | Description                                                                                                                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                                                                                                                               | [operations.RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody13AttributesOpenresponsesOutput42Type](../../models/operations/retrieveannotationqueueitemcontentannotationqueuesresponse200applicationjsonresponsebody13attributesopenresponsesoutput42type.md) | :heavy_minus_sign:                                                                                                                                                                                                                                                                                   | The type of the output text. Always `output_text`.                                                                                                                                                                                                                                                   |
| `text`                                                                                                                                                                                                                                                                                               | *string*                                                                                                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                                                                                   | The text output from the model.                                                                                                                                                                                                                                                                      |
| `annotations`                                                                                                                                                                                                                                                                                        | [operations.RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody13AttributesAnnotations](../../models/operations/retrieveannotationqueueitemcontentannotationqueuesresponse200applicationjsonresponsebody13attributesannotations.md)[]                           | :heavy_check_mark:                                                                                                                                                                                                                                                                                   | The annotations of the text output.                                                                                                                                                                                                                                                                  |
| `logprobs`                                                                                                                                                                                                                                                                                           | [operations.RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody13AttributesLogprobs](../../models/operations/retrieveannotationqueueitemcontentannotationqueuesresponse200applicationjsonresponsebody13attributeslogprobs.md)[]                                 | :heavy_check_mark:                                                                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                                                                  |