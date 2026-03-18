# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdMessageAnnotationQueue1

## Example Usage

```typescript
import { GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdMessageAnnotationQueue1 } from "@orq-ai/node/models/operations";

let value:
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdMessageAnnotationQueue1 = {
    role: "assistant",
    toolCalls: [
      {
        type: "function",
        function: {
          name: "<value>",
          arguments: "<value>",
        },
      },
    ],
  };
```

## Fields

| Field                                                                                                                                                                                                                  | Type                                                                                                                                                                                                                   | Required                                                                                                                                                                                                               | Description                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                                                                                                                                 | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdMessageAnnotationQueueResponse200Role](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidmessageannotationqueueresponse200role.md) | :heavy_check_mark:                                                                                                                                                                                                     | The role of the prompt message                                                                                                                                                                                         |
| `content`                                                                                                                                                                                                              | *string*                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                     | N/A                                                                                                                                                                                                                    |
| `toolCalls`                                                                                                                                                                                                            | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdMessageAnnotationQueueToolCalls](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidmessageannotationqueuetoolcalls.md)[]           | :heavy_check_mark:                                                                                                                                                                                                     | N/A                                                                                                                                                                                                                    |