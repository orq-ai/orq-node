# RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesPrompt

Prompt configuration for the request

## Example Usage

```typescript
import { RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesPrompt } from "@orq-ai/node/models/operations";

let value: RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesPrompt = {
  id: "prompt_01ARZ3NDEKTSV4RRFFQ69G5FAV",
  version: "latest",
};
```

## Fields

| Field                                                                                                                                                                  | Type                                                                                                                                                                   | Required                                                                                                                                                               | Description                                                                                                                                                            | Example                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                   | *string*                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                     | Unique identifier of the prompt to use                                                                                                                                 | prompt_01ARZ3NDEKTSV4RRFFQ69G5FAV                                                                                                                                      |
| `version`                                                                                                                                                              | [operations.RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesVersion](../../models/operations/retrieveannotationqueueitemresponsebodyannotationqueuesversion.md) | :heavy_check_mark:                                                                                                                                                     | Version of the prompt to use (currently only "latest" supported)                                                                                                       | latest                                                                                                                                                                 |