# RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody192

A text output from the model.

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody192,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody192 =
    {
      text: "<value>",
      annotations: [
        {
          url: "https://judicious-violin.name/",
          startIndex: 468123,
          endIndex: 616786,
          title: "<value>",
        },
      ],
      logprobs: [
        {
          token: "<value>",
          logprob: 5752.25,
          bytes: [
            651463,
            608589,
          ],
          topLogprobs: [
            {
              token: "<value>",
              logprob: 7630.29,
              bytes: [
                142765,
                274863,
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
| `type`                                                                                                                                                                                                                                                                                           | [operations.RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody19AttributesOpenresponsesOutputType](../../models/operations/retrieveannotationqueueitemcontentannotationqueuesresponse200applicationjsonresponsebody19attributesopenresponsesoutputtype.md) | :heavy_minus_sign:                                                                                                                                                                                                                                                                               | The type of the output text. Always `output_text`.                                                                                                                                                                                                                                               |
| `text`                                                                                                                                                                                                                                                                                           | *string*                                                                                                                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                                                                                               | The text output from the model.                                                                                                                                                                                                                                                                  |
| `annotations`                                                                                                                                                                                                                                                                                    | [operations.RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody19Annotations](../../models/operations/retrieveannotationqueueitemcontentannotationqueuesresponse200applicationjsonresponsebody19annotations.md)[]                                           | :heavy_check_mark:                                                                                                                                                                                                                                                                               | The annotations of the text output.                                                                                                                                                                                                                                                              |
| `logprobs`                                                                                                                                                                                                                                                                                       | [operations.RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody19Logprobs](../../models/operations/retrieveannotationqueueitemcontentannotationqueuesresponse200applicationjsonresponsebody19logprobs.md)[]                                                 | :heavy_check_mark:                                                                                                                                                                                                                                                                               | N/A                                                                                                                                                                                                                                                                                              |