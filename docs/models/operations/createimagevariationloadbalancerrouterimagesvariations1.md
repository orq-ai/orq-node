# CreateImageVariationLoadBalancerRouterImagesVariations1

## Example Usage

```typescript
import { CreateImageVariationLoadBalancerRouterImagesVariations1 } from "@orq-ai/node/models/operations";

let value: CreateImageVariationLoadBalancerRouterImagesVariations1 = {
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

| Field                                                                                                                                                                | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                               | [operations.CreateImageVariationLoadBalancerRouterImagesVariationsType](../../models/operations/createimagevariationloadbalancerrouterimagesvariationstype.md)       | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `models`                                                                                                                                                             | [operations.CreateImageVariationLoadBalancerRouterImagesVariationsModels](../../models/operations/createimagevariationloadbalancerrouterimagesvariationsmodels.md)[] | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |