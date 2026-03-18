# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdMessagesAnnotationQueueCacheControl

## Example Usage

```typescript
import {
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdMessagesAnnotationQueueCacheControl,
} from "@orq-ai/node/models/operations";

let value:
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdMessagesAnnotationQueueCacheControl =
    {
      type: "ephemeral",
    };
```

## Fields

| Field                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                 | Description                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                                                                                   | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdMessagesAnnotationQueueResponse200Type](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidmessagesannotationqueueresponse200type.md) | :heavy_check_mark:                                                                                                                                                                                                       | Create a cache control breakpoint at this content block. Accepts only the value "ephemeral".                                                                                                                             |
| `ttl`                                                                                                                                                                                                                    | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdMessagesAnnotationQueueTtl](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidmessagesannotationqueuettl.md)                         | :heavy_minus_sign:                                                                                                                                                                                                       | The time-to-live for the cache control breakpoint. This may be one of the following values:<br/><br/>- `5m`: 5 minutes<br/>- `1h`: 1 hour<br/><br/>Defaults to `5m`. Only supported by `Anthropic` Claude models.        |