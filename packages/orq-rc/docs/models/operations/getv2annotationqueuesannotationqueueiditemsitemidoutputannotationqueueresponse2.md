# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdOutputAnnotationQueueResponse2

A web search tool call output

## Example Usage

```typescript
import { GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdOutputAnnotationQueueResponse2 } from "@orq-ai/node/models/operations";

let value:
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdOutputAnnotationQueueResponse2 =
    {
      id: "<id>",
      type: "web_search_call",
      status: "incomplete",
    };
```

## Fields

| Field                                                                                                                                                                                              | Type                                                                                                                                                                                               | Required                                                                                                                                                                                           | Description                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                                               | *string*                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                 | The unique identifier for this output item                                                                                                                                                         |
| `type`                                                                                                                                                                                             | *"web_search_call"*                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                 | The type of output item                                                                                                                                                                            |
| `status`                                                                                                                                                                                           | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdOutputAnnotationQueueStatus](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidoutputannotationqueuestatus.md) | :heavy_check_mark:                                                                                                                                                                                 | The status of the web search                                                                                                                                                                       |