# CreateImageEditLoadBalancer1

## Example Usage

```typescript
import { CreateImageEditLoadBalancer1 } from "@orq-ai/node/models/operations";

let value: CreateImageEditLoadBalancer1 = {
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

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                         | [operations.CreateImageEditLoadBalancerType](../../models/operations/createimageeditloadbalancertype.md)       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `models`                                                                                                       | [operations.CreateImageEditLoadBalancerModels](../../models/operations/createimageeditloadbalancermodels.md)[] | :heavy_check_mark:                                                                                             | N/A                                                                                                            |