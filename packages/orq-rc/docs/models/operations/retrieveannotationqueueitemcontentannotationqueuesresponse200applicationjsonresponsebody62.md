# RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody62

A text output from the model.

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody62,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody62 =
    {
      text: "<value>",
      annotations: [
        {
          url: "https://actual-traffic.net/",
          startIndex: 539896,
          endIndex: 565327,
          title: "<value>",
        },
      ],
      logprobs: [
        {
          token: "<value>",
          logprob: 822.82,
          bytes: [
            238823,
            805195,
            370149,
          ],
          topLogprobs: [
            {
              token: "<value>",
              logprob: 7131.4,
              bytes: [
                749558,
                908950,
                345763,
              ],
            },
          ],
        },
      ],
    };
```

## Fields

| Field                                                                                                                                                                                                                                                                                          | Type                                                                                                                                                                                                                                                                                           | Required                                                                                                                                                                                                                                                                                       | Description                                                                                                                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                                                                                                                         | [operations.RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody6AttributesOpenresponsesOutputType](../../models/operations/retrieveannotationqueueitemcontentannotationqueuesresponse200applicationjsonresponsebody6attributesopenresponsesoutputtype.md) | :heavy_minus_sign:                                                                                                                                                                                                                                                                             | The type of the output text. Always `output_text`.                                                                                                                                                                                                                                             |
| `text`                                                                                                                                                                                                                                                                                         | *string*                                                                                                                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                                                                                             | The text output from the model.                                                                                                                                                                                                                                                                |
| `annotations`                                                                                                                                                                                                                                                                                  | [operations.RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody6Annotations](../../models/operations/retrieveannotationqueueitemcontentannotationqueuesresponse200applicationjsonresponsebody6annotations.md)[]                                           | :heavy_check_mark:                                                                                                                                                                                                                                                                             | The annotations of the text output.                                                                                                                                                                                                                                                            |
| `logprobs`                                                                                                                                                                                                                                                                                     | [operations.RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody6Logprobs](../../models/operations/retrieveannotationqueueitemcontentannotationqueuesresponse200applicationjsonresponsebody6logprobs.md)[]                                                 | :heavy_check_mark:                                                                                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                                                                                            |