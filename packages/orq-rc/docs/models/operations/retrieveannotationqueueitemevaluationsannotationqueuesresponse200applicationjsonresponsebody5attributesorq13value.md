# RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse200ApplicationJSONResponseBody5AttributesOrq13Value

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse200ApplicationJSONResponseBody5AttributesOrq13Value,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse200ApplicationJSONResponseBody5AttributesOrq13Value =
    {
      rouge1: {
        f1: 5957.59,
        precision: 1142.34,
        recall: 836.06,
      },
      rouge2: {
        f1: 4769.16,
        precision: 6157.84,
        recall: 5285.41,
      },
      rougeL: {
        f1: 8537.69,
        precision: 923.51,
        recall: 7645.19,
      },
    };
```

## Fields

| Field                                                                                                                                                                                    | Type                                                                                                                                                                                     | Required                                                                                                                                                                                 | Description                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `rouge1`                                                                                                                                                                                 | [operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse200Rouge1](../../models/operations/retrieveannotationqueueitemevaluationsannotationqueuesresponse200rouge1.md) | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |
| `rouge2`                                                                                                                                                                                 | [operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse200Rouge2](../../models/operations/retrieveannotationqueueitemevaluationsannotationqueuesresponse200rouge2.md) | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |
| `rougeL`                                                                                                                                                                                 | [operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse200RougeL](../../models/operations/retrieveannotationqueueitemevaluationsannotationqueuesresponse200rougel.md) | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |