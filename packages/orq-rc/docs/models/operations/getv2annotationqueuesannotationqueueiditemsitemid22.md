# GetV2AnnotationQueuesAnnotationQueueIdItemsItemId22

Represents the output of a function tool call, provided as input to the model.

## Example Usage

```typescript
import { GetV2AnnotationQueuesAnnotationQueueIdItemsItemId22 } from "@orq-ai/node/models/operations";

let value: GetV2AnnotationQueuesAnnotationQueueIdItemsItemId22 = {
  type: "function_call_output",
  callId: "<id>",
  output: "<value>",
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                 | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemId2Type](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemid2type.md) | :heavy_check_mark:                                                                                                                                     | The type of input item                                                                                                                                 |
| `callId`                                                                                                                                               | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | The ID of the function call this output is for                                                                                                         |
| `output`                                                                                                                                               | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | The output from the function call                                                                                                                      |