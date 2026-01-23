# CreateImageVariationLoadBalancer1

## Example Usage

```typescript
import { CreateImageVariationLoadBalancer1 } from "@orq-ai/node/models/operations";

let value: CreateImageVariationLoadBalancer1 = {
  type: "weight_based",
  models: [
    {
      model: "openai/gpt-4o",
      weight: 0.7,
    },
    {
      model: "anthropic/claude-3-5-sonnet",
      weight: 0.3,
    },
  ],
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                   | [operations.CreateImageVariationLoadBalancerType](../../models/operations/createimagevariationloadbalancertype.md)       | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `models`                                                                                                                 | [operations.CreateImageVariationLoadBalancerModels](../../models/operations/createimagevariationloadbalancermodels.md)[] | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |