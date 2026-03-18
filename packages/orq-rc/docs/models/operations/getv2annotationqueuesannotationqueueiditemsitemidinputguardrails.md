# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdInputGuardrails

## Example Usage

```typescript
import { GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdInputGuardrails } from "@orq-ai/node/models/operations";

let value: GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdInputGuardrails = {
  id: "<id>",
  executeOn: "input",
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                     | *operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdInputId*                                                                                                    | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `executeOn`                                                                                                                                                              | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdInputExecuteOn](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidinputexecuteon.md) | :heavy_check_mark:                                                                                                                                                       | Determines whether the guardrail runs on the input (user message) or output (model response).                                                                            |