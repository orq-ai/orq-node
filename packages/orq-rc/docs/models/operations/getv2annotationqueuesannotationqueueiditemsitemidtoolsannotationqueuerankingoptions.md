# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdToolsAnnotationQueueRankingOptions

Options for ranking search results

## Example Usage

```typescript
import {
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdToolsAnnotationQueueRankingOptions,
} from "@orq-ai/node/models/operations";

let value:
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdToolsAnnotationQueueRankingOptions =
    {};
```

## Fields

| Field                                                                                                                                                                                            | Type                                                                                                                                                                                             | Required                                                                                                                                                                                         | Description                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `ranker`                                                                                                                                                                                         | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdToolsAnnotationQueueRanker](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidtoolsannotationqueueranker.md) | :heavy_minus_sign:                                                                                                                                                                               | The ranking algorithm                                                                                                                                                                            |
| `scoreThreshold`                                                                                                                                                                                 | *number*                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                               | Minimum relevance score                                                                                                                                                                          |