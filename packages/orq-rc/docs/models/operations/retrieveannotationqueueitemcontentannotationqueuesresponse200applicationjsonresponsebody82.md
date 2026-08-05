# RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody82

A text output from the model.

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody82,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody82 =
    {
      text: "<value>",
      annotations: [
        {
          url: "https://twin-decongestant.info",
          startIndex: 79722,
          endIndex: 130687,
          title: "<value>",
        },
      ],
      logprobs: [
        {
          token: "<value>",
          logprob: 8307.15,
          bytes: [],
          topLogprobs: [],
        },
      ],
    };
```

## Fields

| Field                                                                                                                                                                                                                                                                                          | Type                                                                                                                                                                                                                                                                                           | Required                                                                                                                                                                                                                                                                                       | Description                                                                                                                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                                                                                                                         | [operations.RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody8AttributesOpenresponsesOutputType](../../models/operations/retrieveannotationqueueitemcontentannotationqueuesresponse200applicationjsonresponsebody8attributesopenresponsesoutputtype.md) | :heavy_minus_sign:                                                                                                                                                                                                                                                                             | The type of the output text. Always `output_text`.                                                                                                                                                                                                                                             |
| `text`                                                                                                                                                                                                                                                                                         | *string*                                                                                                                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                                                                                             | The text output from the model.                                                                                                                                                                                                                                                                |
| `annotations`                                                                                                                                                                                                                                                                                  | [operations.RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody8Annotations](../../models/operations/retrieveannotationqueueitemcontentannotationqueuesresponse200applicationjsonresponsebody8annotations.md)[]                                           | :heavy_check_mark:                                                                                                                                                                                                                                                                             | The annotations of the text output.                                                                                                                                                                                                                                                            |
| `logprobs`                                                                                                                                                                                                                                                                                     | [operations.RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody8Logprobs](../../models/operations/retrieveannotationqueueitemcontentannotationqueuesresponse200applicationjsonresponsebody8logprobs.md)[]                                                 | :heavy_check_mark:                                                                                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                                                                                            |