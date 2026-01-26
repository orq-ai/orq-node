# CreateImageLoadBalancerRouterImagesGenerations1

## Example Usage

```typescript
import { CreateImageLoadBalancerRouterImagesGenerations1 } from "@orq-ai/node/models/operations";

let value: CreateImageLoadBalancerRouterImagesGenerations1 = {
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

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                               | [operations.CreateImageLoadBalancerRouterImagesGenerationsType](../../models/operations/createimageloadbalancerrouterimagesgenerationstype.md)       | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `models`                                                                                                                                             | [operations.CreateImageLoadBalancerRouterImagesGenerationsModels](../../models/operations/createimageloadbalancerrouterimagesgenerationsmodels.md)[] | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |