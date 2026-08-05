# RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody242

A text output from the model.

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody242,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody242 =
    {
      text: "<value>",
      annotations: [
        {
          url: "https://possible-horst.name",
          startIndex: 93469,
          endIndex: 854114,
          title: "<value>",
        },
      ],
      logprobs: [
        {
          token: "<value>",
          logprob: 9263.02,
          bytes: [
            546076,
          ],
          topLogprobs: [
            {
              token: "<value>",
              logprob: 5038.5,
              bytes: [
                126939,
                657567,
                296674,
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
| `type`                                                                                                                                                                                                                                                                                           | [operations.RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody24AttributesOpenresponsesOutputType](../../models/operations/retrieveannotationqueueitemcontentannotationqueuesresponse200applicationjsonresponsebody24attributesopenresponsesoutputtype.md) | :heavy_minus_sign:                                                                                                                                                                                                                                                                               | The type of the output text. Always `output_text`.                                                                                                                                                                                                                                               |
| `text`                                                                                                                                                                                                                                                                                           | *string*                                                                                                                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                                                                                               | The text output from the model.                                                                                                                                                                                                                                                                  |
| `annotations`                                                                                                                                                                                                                                                                                    | [operations.RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody24Annotations](../../models/operations/retrieveannotationqueueitemcontentannotationqueuesresponse200applicationjsonresponsebody24annotations.md)[]                                           | :heavy_check_mark:                                                                                                                                                                                                                                                                               | The annotations of the text output.                                                                                                                                                                                                                                                              |
| `logprobs`                                                                                                                                                                                                                                                                                       | [operations.RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody24Logprobs](../../models/operations/retrieveannotationqueueitemcontentannotationqueuesresponse200applicationjsonresponsebody24logprobs.md)[]                                                 | :heavy_check_mark:                                                                                                                                                                                                                                                                               | N/A                                                                                                                                                                                                                                                                                              |