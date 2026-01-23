# UpdatePromptLoadBalancerPrompts1

## Example Usage

```typescript
import { UpdatePromptLoadBalancerPrompts1 } from "@orq-ai/node/models/operations";

let value: UpdatePromptLoadBalancerPrompts1 = {
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

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                 | [operations.UpdatePromptLoadBalancerPromptsType](../../models/operations/updatepromptloadbalancerpromptstype.md)       | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `models`                                                                                                               | [operations.UpdatePromptLoadBalancerPromptsModels](../../models/operations/updatepromptloadbalancerpromptsmodels.md)[] | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |