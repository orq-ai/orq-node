# CreateTranslationLoadBalancer1

## Example Usage

```typescript
import { CreateTranslationLoadBalancer1 } from "@orq-ai/node/models/operations";

let value: CreateTranslationLoadBalancer1 = {
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

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                             | [operations.CreateTranslationLoadBalancerType](../../models/operations/createtranslationloadbalancertype.md)       | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `models`                                                                                                           | [operations.CreateTranslationLoadBalancerModels](../../models/operations/createtranslationloadbalancermodels.md)[] | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |