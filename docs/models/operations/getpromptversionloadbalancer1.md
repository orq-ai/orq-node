# GetPromptVersionLoadBalancer1

## Example Usage

```typescript
import { GetPromptVersionLoadBalancer1 } from "@orq-ai/node/models/operations";

let value: GetPromptVersionLoadBalancer1 = {
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

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                           | [operations.GetPromptVersionLoadBalancerType](../../models/operations/getpromptversionloadbalancertype.md)       | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `models`                                                                                                         | [operations.GetPromptVersionLoadBalancerModels](../../models/operations/getpromptversionloadbalancermodels.md)[] | :heavy_check_mark:                                                                                               | N/A                                                                                                              |