# CreatePromptLoadBalancer1

## Example Usage

```typescript
import { CreatePromptLoadBalancer1 } from "@orq-ai/node/models/operations";

let value: CreatePromptLoadBalancer1 = {
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

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                   | [operations.CreatePromptLoadBalancerType](../../models/operations/createpromptloadbalancertype.md)       | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `models`                                                                                                 | [operations.CreatePromptLoadBalancerModels](../../models/operations/createpromptloadbalancermodels.md)[] | :heavy_check_mark:                                                                                       | N/A                                                                                                      |