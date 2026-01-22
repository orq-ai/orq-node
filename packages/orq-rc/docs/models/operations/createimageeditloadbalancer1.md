# CreateImageEditLoadBalancer1

## Example Usage

```typescript
import { CreateImageEditLoadBalancer1 } from "@orq-ai/node/models/operations";

let value: CreateImageEditLoadBalancer1 = {
  type: "weight_based",
  model: "openai/gpt-4o",
  weight: 0.7,
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                   | [operations.CreateImageEditLoadBalancerType](../../models/operations/createimageeditloadbalancertype.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |                                                                                                          |
| `model`                                                                                                  | *string*                                                                                                 | :heavy_check_mark:                                                                                       | Model identifier for load balancing                                                                      | openai/gpt-4o                                                                                            |
| `weight`                                                                                                 | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | Weight assigned to this model for load balancing                                                         | 0.7                                                                                                      |