# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyPrompt

Prompt configuration for the request

## Example Usage

```typescript
import { GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyPrompt } from "@orq-ai/node/models/operations";

let value: GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyPrompt =
  {
    id: "prompt_01ARZ3NDEKTSV4RRFFQ69G5FAV",
    version: "latest",
  };
```

## Fields

| Field                                                                                                                                                                              | Type                                                                                                                                                                               | Required                                                                                                                                                                           | Description                                                                                                                                                                        | Example                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                               | *string*                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                 | Unique identifier of the prompt to use                                                                                                                                             | prompt_01ARZ3NDEKTSV4RRFFQ69G5FAV                                                                                                                                                  |
| `version`                                                                                                                                                                          | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyVersion](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidresponsebodyversion.md) | :heavy_check_mark:                                                                                                                                                                 | Version of the prompt to use (currently only "latest" supported)                                                                                                                   | latest                                                                                                                                                                             |