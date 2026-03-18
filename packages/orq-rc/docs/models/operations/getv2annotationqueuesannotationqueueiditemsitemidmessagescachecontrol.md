# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdMessagesCacheControl

## Example Usage

```typescript
import { GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdMessagesCacheControl } from "@orq-ai/node/models/operations";

let value:
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdMessagesCacheControl = {
    type: "ephemeral",
  };
```

## Fields

| Field                                                                                                                                                                                              | Type                                                                                                                                                                                               | Required                                                                                                                                                                                           | Description                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                             | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdMessagesAnnotationQueueType](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidmessagesannotationqueuetype.md) | :heavy_check_mark:                                                                                                                                                                                 | Create a cache control breakpoint at this content block. Accepts only the value "ephemeral".                                                                                                       |
| `ttl`                                                                                                                                                                                              | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdMessagesTtl](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidmessagesttl.md)                                 | :heavy_minus_sign:                                                                                                                                                                                 | The time-to-live for the cache control breakpoint. This may be one of the following values:<br/><br/>- `5m`: 5 minutes<br/>- `1h`: 1 hour<br/><br/>Defaults to `5m`. Only supported by `Anthropic` Claude models. |