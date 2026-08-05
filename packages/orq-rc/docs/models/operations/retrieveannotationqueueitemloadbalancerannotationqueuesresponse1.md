# RetrieveAnnotationQueueItemLoadBalancerAnnotationQueuesResponse1

## Example Usage

```typescript
import { RetrieveAnnotationQueueItemLoadBalancerAnnotationQueuesResponse1 } from "@orq-ai/node/models/operations";

let value: RetrieveAnnotationQueueItemLoadBalancerAnnotationQueuesResponse1 = {
  type: "weight_based",
  models: [
    {
      model: "openai/gpt-4o",
      weight: 0.7,
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                  | Type                                                                                                                                                                                   | Required                                                                                                                                                                               | Description                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                 | [operations.RetrieveAnnotationQueueItemLoadBalancerAnnotationQueuesResponseType](../../models/operations/retrieveannotationqueueitemloadbalancerannotationqueuesresponsetype.md)       | :heavy_check_mark:                                                                                                                                                                     | N/A                                                                                                                                                                                    |
| `models`                                                                                                                                                                               | [operations.RetrieveAnnotationQueueItemLoadBalancerAnnotationQueuesResponseModels](../../models/operations/retrieveannotationqueueitemloadbalancerannotationqueuesresponsemodels.md)[] | :heavy_check_mark:                                                                                                                                                                     | N/A                                                                                                                                                                                    |