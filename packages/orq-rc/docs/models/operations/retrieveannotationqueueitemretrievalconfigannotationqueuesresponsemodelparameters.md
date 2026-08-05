# RetrieveAnnotationQueueItemRetrievalConfigAnnotationQueuesResponseModelParameters

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemRetrievalConfigAnnotationQueuesResponseModelParameters,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemRetrievalConfigAnnotationQueuesResponseModelParameters =
    {};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `threshold`                                                                                                                              | *number*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | The threshold value used to filter the rerank results, only documents with a relevance score greater than the threshold will be returned |