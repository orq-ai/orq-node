# RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody72

A text output from the model.

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody72,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody72 =
    {
      text: "<value>",
      annotations: [
        {
          url: "https://extra-large-expansion.com",
          startIndex: 158202,
          endIndex: 23079,
          title: "<value>",
        },
      ],
      logprobs: [
        {
          token: "<value>",
          logprob: 8516.4,
          bytes: [
            359487,
            387970,
          ],
          topLogprobs: [],
        },
      ],
    };
```

## Fields

| Field                                                                                                                                                                                                                                                                                          | Type                                                                                                                                                                                                                                                                                           | Required                                                                                                                                                                                                                                                                                       | Description                                                                                                                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                                                                                                                         | [operations.RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody7AttributesOpenresponsesOutputType](../../models/operations/retrieveannotationqueueitemcontentannotationqueuesresponse200applicationjsonresponsebody7attributesopenresponsesoutputtype.md) | :heavy_minus_sign:                                                                                                                                                                                                                                                                             | The type of the output text. Always `output_text`.                                                                                                                                                                                                                                             |
| `text`                                                                                                                                                                                                                                                                                         | *string*                                                                                                                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                                                                                             | The text output from the model.                                                                                                                                                                                                                                                                |
| `annotations`                                                                                                                                                                                                                                                                                  | [operations.RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody7Annotations](../../models/operations/retrieveannotationqueueitemcontentannotationqueuesresponse200applicationjsonresponsebody7annotations.md)[]                                           | :heavy_check_mark:                                                                                                                                                                                                                                                                             | The annotations of the text output.                                                                                                                                                                                                                                                            |
| `logprobs`                                                                                                                                                                                                                                                                                     | [operations.RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody7Logprobs](../../models/operations/retrieveannotationqueueitemcontentannotationqueuesresponse200applicationjsonresponsebody7logprobs.md)[]                                                 | :heavy_check_mark:                                                                                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                                                                                            |