# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyTools

## Example Usage

```typescript
import { GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyTools } from "@orq-ai/node/models/operations";

let value: GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyTools =
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
| `type`                                                                                                                                                                                                                                                                       | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200ApplicationJson14InputType](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidresponsebodyannotationqueueresponse200applicationjson14inputtype.md) | :heavy_check_mark:                                                                                                                                                                                                                                                           | The type of the tool. Currently, only `function` is supported.                                                                                                                                                                                                               |
| `function`                                                                                                                                                                                                                                                                   | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyFunction](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidresponsebodyfunction.md)                                                                                         | :heavy_check_mark:                                                                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                                                                          |