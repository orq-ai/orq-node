# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdToolsRankingOptions

Options for ranking search results

## Example Usage

```typescript
import { GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdToolsRankingOptions } from "@orq-ai/node/models/operations";

let value:
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdToolsRankingOptions = {};
```

## Fields

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `ranker`                                                                                                                                                           | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdToolsRanker](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidtoolsranker.md) | :heavy_minus_sign:                                                                                                                                                 | The ranking algorithm                                                                                                                                              |
| `scoreThreshold`                                                                                                                                                   | *number*                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                 | Minimum relevance score                                                                                                                                            |