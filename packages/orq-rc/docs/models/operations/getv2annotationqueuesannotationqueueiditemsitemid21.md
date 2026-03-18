# GetV2AnnotationQueuesAnnotationQueueIdItemsItemId21

Represents a message in the conversation, with a role and content (string or rich content parts).

## Example Usage

```typescript
import { GetV2AnnotationQueuesAnnotationQueueIdItemsItemId21 } from "@orq-ai/node/models/operations";

let value: GetV2AnnotationQueuesAnnotationQueueIdItemsItemId21 = {
  role: "system",
  content: [],
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `role`                                                                                                                                                 | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemId2Role](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemid2role.md) | :heavy_check_mark:                                                                                                                                     | The role of the message author                                                                                                                         |
| `content`                                                                                                                                              | *operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemId2Content*                                                                                 | :heavy_check_mark:                                                                                                                                     | The content of the message, either a string or an array of content parts                                                                               |