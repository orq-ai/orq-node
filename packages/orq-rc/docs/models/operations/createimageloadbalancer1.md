# CreateImageLoadBalancer1

## Example Usage

```typescript
import { CreateImageLoadBalancer1 } from "@orq-ai/node/models/operations";

let value: CreateImageLoadBalancer1 = {
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

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                 | [operations.CreateImageLoadBalancerType](../../models/operations/createimageloadbalancertype.md)       | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `models`                                                                                               | [operations.CreateImageLoadBalancerModels](../../models/operations/createimageloadbalancermodels.md)[] | :heavy_check_mark:                                                                                     | N/A                                                                                                    |