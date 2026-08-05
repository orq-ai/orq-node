# RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse200ApplicationJSONResponseBody2Value

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse200ApplicationJSONResponseBody2Value,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse200ApplicationJSONResponseBody2Value =
    {
      rouge1: {
        f1: 3862.12,
        precision: 8173.09,
        recall: 1090.98,
      },
      rouge2: {
        f1: 809.43,
        precision: 9856.63,
        recall: 4941.36,
      },
      rougeL: {
        f1: 9289,
        precision: 6462.03,
        recall: 4219.34,
      },
    };
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `rouge1`                                                                                                                           | [operations.RetrieveAnnotationQueueItemEvaluationsRouge1](../../models/operations/retrieveannotationqueueitemevaluationsrouge1.md) | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `rouge2`                                                                                                                           | [operations.RetrieveAnnotationQueueItemEvaluationsRouge2](../../models/operations/retrieveannotationqueueitemevaluationsrouge2.md) | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `rougeL`                                                                                                                           | [operations.RetrieveAnnotationQueueItemEvaluationsRougeL](../../models/operations/retrieveannotationqueueitemevaluationsrougel.md) | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |