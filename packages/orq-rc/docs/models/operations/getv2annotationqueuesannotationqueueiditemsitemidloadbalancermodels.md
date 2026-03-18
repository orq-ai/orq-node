# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdLoadBalancerModels

## Example Usage

```typescript
import { GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdLoadBalancerModels } from "@orq-ai/node/models/operations";

let value: GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdLoadBalancerModels =
  {
    model: "openai/gpt-4o",
    weight: 0.7,
  };
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      | Example                                          |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `model`                                          | *string*                                         | :heavy_check_mark:                               | Model identifier for load balancing              | openai/gpt-4o                                    |
| `weight`                                         | *number*                                         | :heavy_minus_sign:                               | Weight assigned to this model for load balancing | 0.7                                              |