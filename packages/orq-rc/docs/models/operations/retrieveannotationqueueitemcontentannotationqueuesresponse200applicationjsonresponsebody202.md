# RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody202

A text output from the model.

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody202,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody202 =
    {
      text: "<value>",
      annotations: [
        {
          url: "https://lasting-footrest.info",
          startIndex: 508942,
          endIndex: 426036,
          title: "<value>",
        },
      ],
      logprobs: [
        {
          token: "<value>",
          logprob: 466.32,
          bytes: [
            463896,
            631354,
            197921,
          ],
          topLogprobs: [
            {
              token: "<value>",
              logprob: 3899.32,
              bytes: [
                920004,
                727821,
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
| `type`                                                                                                                                                                                                                                                                                           | [operations.RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody20AttributesOpenresponsesOutputType](../../models/operations/retrieveannotationqueueitemcontentannotationqueuesresponse200applicationjsonresponsebody20attributesopenresponsesoutputtype.md) | :heavy_minus_sign:                                                                                                                                                                                                                                                                               | The type of the output text. Always `output_text`.                                                                                                                                                                                                                                               |
| `text`                                                                                                                                                                                                                                                                                           | *string*                                                                                                                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                                                                                               | The text output from the model.                                                                                                                                                                                                                                                                  |
| `annotations`                                                                                                                                                                                                                                                                                    | [operations.RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody20Annotations](../../models/operations/retrieveannotationqueueitemcontentannotationqueuesresponse200applicationjsonresponsebody20annotations.md)[]                                           | :heavy_check_mark:                                                                                                                                                                                                                                                                               | The annotations of the text output.                                                                                                                                                                                                                                                              |
| `logprobs`                                                                                                                                                                                                                                                                                       | [operations.RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody20Logprobs](../../models/operations/retrieveannotationqueueitemcontentannotationqueuesresponse200applicationjsonresponsebody20logprobs.md)[]                                                 | :heavy_check_mark:                                                                                                                                                                                                                                                                               | N/A                                                                                                                                                                                                                                                                                              |