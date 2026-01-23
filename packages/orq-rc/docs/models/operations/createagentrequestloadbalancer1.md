# CreateAgentRequestLoadBalancer1

## Example Usage

```typescript
import { CreateAgentRequestLoadBalancer1 } from "@orq-ai/node/models/operations";

let value: CreateAgentRequestLoadBalancer1 = {
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

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                         | [operations.CreateAgentRequestLoadBalancerType](../../models/operations/createagentrequestloadbalancertype.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `models`                                                                                                       | [operations.LoadBalancerModels](../../models/operations/loadbalancermodels.md)[]                               | :heavy_check_mark:                                                                                             | N/A                                                                                                            |