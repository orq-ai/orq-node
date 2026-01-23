# GetAllPromptsLoadBalancer1

## Example Usage

```typescript
import { GetAllPromptsLoadBalancer1 } from "@orq-ai/node/models/operations";

let value: GetAllPromptsLoadBalancer1 = {
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

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                     | [operations.GetAllPromptsLoadBalancerType](../../models/operations/getallpromptsloadbalancertype.md)       | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `models`                                                                                                   | [operations.GetAllPromptsLoadBalancerModels](../../models/operations/getallpromptsloadbalancermodels.md)[] | :heavy_check_mark:                                                                                         | N/A                                                                                                        |