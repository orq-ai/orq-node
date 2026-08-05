# RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponseValue

## Example Usage

```typescript
import { RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponseValue } from "@orq-ai/node/models/operations";

let value: RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponseValue =
  {
    rouge1: {
      f1: 2570.25,
      precision: 7777.26,
      recall: 4465.36,
    },
    rouge2: {
      f1: 4436.73,
      precision: 7513.2,
      recall: 2466.04,
    },
    rougeL: {
      f1: 58.92,
      precision: 2196.23,
      recall: 7451.01,
    },
  };
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `rouge1`                                                                     | [operations.EvaluationsRouge1](../../models/operations/evaluationsrouge1.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `rouge2`                                                                     | [operations.EvaluationsRouge2](../../models/operations/evaluationsrouge2.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `rougeL`                                                                     | [operations.EvaluationsRougeL](../../models/operations/evaluationsrougel.md) | :heavy_check_mark:                                                           | N/A                                                                          |