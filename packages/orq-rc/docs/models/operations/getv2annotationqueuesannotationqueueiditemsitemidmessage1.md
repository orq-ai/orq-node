# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdMessage1

## Example Usage

```typescript
import { GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdMessage1 } from "@orq-ai/node/models/operations";

let value: GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdMessage1 = {
  role: "user",
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

| Field                                                                                                                                                                          | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `role`                                                                                                                                                                         | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdMessageRole](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidmessagerole.md)             | :heavy_check_mark:                                                                                                                                                             | The role of the prompt message                                                                                                                                                 |
| `content`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `toolCalls`                                                                                                                                                                    | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdMessageToolCalls](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidmessagetoolcalls.md)[] | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |