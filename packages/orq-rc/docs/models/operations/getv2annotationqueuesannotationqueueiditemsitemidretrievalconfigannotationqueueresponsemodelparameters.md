# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdRetrievalConfigAnnotationQueueResponseModelParameters

## Example Usage

```typescript
import {
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdRetrievalConfigAnnotationQueueResponseModelParameters,
} from "@orq-ai/node/models/operations";

let value:
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdRetrievalConfigAnnotationQueueResponseModelParameters =
    {};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `threshold`                                                                                                                              | *number*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | The threshold value used to filter the rerank results, only documents with a relevance score greater than the threshold will be returned |