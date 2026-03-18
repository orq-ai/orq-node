# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdOutputAnnotationQueueResponse1

An assistant message output

## Example Usage

```typescript
import { GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdOutputAnnotationQueueResponse1 } from "@orq-ai/node/models/operations";

let value:
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdOutputAnnotationQueueResponse1 =
    {
      id: "<id>",
      type: "message",
      role: "assistant",
      status: "incomplete",
    };
```

## Fields

| Field                                                                                                                                                                | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                 | *string*                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                   | The unique identifier for this message                                                                                                                               |
| `type`                                                                                                                                                               | *"message"*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                   | The type of output item                                                                                                                                              |
| `role`                                                                                                                                                               | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdOutputRole](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidoutputrole.md)     | :heavy_check_mark:                                                                                                                                                   | The role of the message author                                                                                                                                       |
| `status`                                                                                                                                                             | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdOutputStatus](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidoutputstatus.md) | :heavy_check_mark:                                                                                                                                                   | The status of the message                                                                                                                                            |
| `content`                                                                                                                                                            | *operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdOutputContent*[]                                                                                        | :heavy_minus_sign:                                                                                                                                                   | The content parts of the message                                                                                                                                     |