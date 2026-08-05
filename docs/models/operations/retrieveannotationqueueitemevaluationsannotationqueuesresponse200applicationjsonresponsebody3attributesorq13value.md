# RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse200ApplicationJSONResponseBody3AttributesOrq13Value

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse200ApplicationJSONResponseBody3AttributesOrq13Value,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse200ApplicationJSONResponseBody3AttributesOrq13Value =
    {
      rouge1: {
        f1: 7079.04,
        precision: 7931.56,
        recall: 1319.42,
      },
      rouge2: {
        f1: 7664.59,
        precision: 3219.78,
        recall: 2067.77,
      },
      rougeL: {
        f1: 589.51,
        precision: 8126.34,
        recall: 3274.58,
      },
    };
```

## Fields

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `rouge1`                                                                                                                                                           | [operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesRouge1](../../models/operations/retrieveannotationqueueitemevaluationsannotationqueuesrouge1.md) | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `rouge2`                                                                                                                                                           | [operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesRouge2](../../models/operations/retrieveannotationqueueitemevaluationsannotationqueuesrouge2.md) | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `rougeL`                                                                                                                                                           | [operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesRougeL](../../models/operations/retrieveannotationqueueitemevaluationsannotationqueuesrougel.md) | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |