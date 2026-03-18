# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdSummaryAnnotationQueueResponse200ApplicationJSONResponseBody232

A text output from the model.

## Example Usage

```typescript
import {
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdSummaryAnnotationQueueResponse200ApplicationJSONResponseBody232,
} from "@orq-ai/node/models/operations";

let value:
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdSummaryAnnotationQueueResponse200ApplicationJSONResponseBody232 =
    {
      text: "<value>",
      annotations: [
        {
          url: "https://thrifty-digit.org/",
          startIndex: 615248,
          endIndex: 766118,
          title: "<value>",
        },
      ],
      logprobs: [
        {
          token: "<value>",
          logprob: 4470,
          bytes: [],
          topLogprobs: [
            {
              token: "<value>",
              logprob: 7709.73,
              bytes: [],
            },
          ],
        },
      ],
    };
```

## Fields

| Field                                                                                                                                                                                                                                                                                                | Type                                                                                                                                                                                                                                                                                                 | Required                                                                                                                                                                                                                                                                                             | Description                                                                                                                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                                                                                                                               | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdSummaryAnnotationQueueResponse200ApplicationJSONResponseBody23AttributesType](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidsummaryannotationqueueresponse200applicationjsonresponsebody23attributestype.md) | :heavy_minus_sign:                                                                                                                                                                                                                                                                                   | The type of the output text. Always `output_text`.                                                                                                                                                                                                                                                   |
| `text`                                                                                                                                                                                                                                                                                               | *string*                                                                                                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                                                                                   | The text output from the model.                                                                                                                                                                                                                                                                      |
| `annotations`                                                                                                                                                                                                                                                                                        | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdSummaryAnnotationQueueResponse200ApplicationJSONResponseBody23Annotations](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidsummaryannotationqueueresponse200applicationjsonresponsebody23annotations.md)[]     | :heavy_check_mark:                                                                                                                                                                                                                                                                                   | The annotations of the text output.                                                                                                                                                                                                                                                                  |
| `logprobs`                                                                                                                                                                                                                                                                                           | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdSummaryAnnotationQueueResponse200ApplicationJSONResponseBody23Logprobs](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidsummaryannotationqueueresponse200applicationjsonresponsebody23logprobs.md)[]           | :heavy_check_mark:                                                                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                                                                  |