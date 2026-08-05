# RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody12

A text output from the model.

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody12,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody12 =
    {
      text: "<value>",
      annotations: [],
      logprobs: [
        {
          token: "<value>",
          logprob: 2323.13,
          bytes: [],
          topLogprobs: [
            {
              token: "<value>",
              logprob: 845.59,
              bytes: [
                818764,
                197973,
                693033,
              ],
            },
          ],
        },
      ],
    };
```

## Fields

| Field                                                                                                                                                                                                                                                | Type                                                                                                                                                                                                                                                 | Required                                                                                                                                                                                                                                             | Description                                                                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                                                                               | [operations.RetrieveAnnotationQueueItemContentAnnotationQueuesResponseType](../../models/operations/retrieveannotationqueueitemcontentannotationqueuesresponsetype.md)                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                   | The type of the output text. Always `output_text`.                                                                                                                                                                                                   |
| `text`                                                                                                                                                                                                                                               | *string*                                                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                                   | The text output from the model.                                                                                                                                                                                                                      |
| `annotations`                                                                                                                                                                                                                                        | [operations.RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody1Annotations](../../models/operations/retrieveannotationqueueitemcontentannotationqueuesresponse200applicationjsonresponsebody1annotations.md)[] | :heavy_check_mark:                                                                                                                                                                                                                                   | The annotations of the text output.                                                                                                                                                                                                                  |
| `logprobs`                                                                                                                                                                                                                                           | [operations.ContentLogprobs](../../models/operations/contentlogprobs.md)[]                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                  |