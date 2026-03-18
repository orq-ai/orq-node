# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponseTools

## Example Usage

```typescript
import {
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponseTools,
} from "@orq-ai/node/models/operations";

let value:
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponseTools =
    {
      type: "function",
      function: {
        name: "<value>",
        parameters: {
          type: "object",
          properties: {
            "key": "<value>",
            "key1": "<value>",
            "key2": "<value>",
          },
        },
      },
    };
```

## Fields

| Field                                                                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `displayName`                                                                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                                                                          |
| `type`                                                                                                                                                                                                                                                                       | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200ApplicationJson22InputType](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidresponsebodyannotationqueueresponse200applicationjson22inputtype.md) | :heavy_check_mark:                                                                                                                                                                                                                                                           | The type of the tool. Currently, only `function` is supported.                                                                                                                                                                                                               |
| `function`                                                                                                                                                                                                                                                                   | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponseFunction](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidresponsebodyannotationqueueresponsefunction.md)                                           | :heavy_check_mark:                                                                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                                                                          |