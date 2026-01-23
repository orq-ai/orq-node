# GetOnePromptLoadBalancer1

## Example Usage

```typescript
import { GetOnePromptLoadBalancer1 } from "@orq-ai/node/models/operations";

let value: GetOnePromptLoadBalancer1 = {
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
| `type`                                                                                                   | [operations.GetOnePromptLoadBalancerType](../../models/operations/getonepromptloadbalancertype.md)       | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `models`                                                                                                 | [operations.GetOnePromptLoadBalancerModels](../../models/operations/getonepromptloadbalancermodels.md)[] | :heavy_check_mark:                                                                                       | N/A                                                                                                      |