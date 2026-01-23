# UpdatePromptLoadBalancer1

## Example Usage

```typescript
import { UpdatePromptLoadBalancer1 } from "@orq-ai/node/models/operations";

let value: UpdatePromptLoadBalancer1 = {
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
| `type`                                                                                                   | [operations.UpdatePromptLoadBalancerType](../../models/operations/updatepromptloadbalancertype.md)       | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `models`                                                                                                 | [operations.UpdatePromptLoadBalancerModels](../../models/operations/updatepromptloadbalancermodels.md)[] | :heavy_check_mark:                                                                                       | N/A                                                                                                      |