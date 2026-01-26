# CreateImageEditLoadBalancerRouterImagesEdits1

## Example Usage

```typescript
import { CreateImageEditLoadBalancerRouterImagesEdits1 } from "@orq-ai/node/models/operations";

let value: CreateImageEditLoadBalancerRouterImagesEdits1 = {
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

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                           | [operations.CreateImageEditLoadBalancerRouterImagesEditsType](../../models/operations/createimageeditloadbalancerrouterimageseditstype.md)       | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `models`                                                                                                                                         | [operations.CreateImageEditLoadBalancerRouterImagesEditsModels](../../models/operations/createimageeditloadbalancerrouterimageseditsmodels.md)[] | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |