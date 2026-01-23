# CreatePromptLoadBalancerPrompts1

## Example Usage

```typescript
import { CreatePromptLoadBalancerPrompts1 } from "@orq-ai/node/models/operations";

let value: CreatePromptLoadBalancerPrompts1 = {
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
| `type`                                                                                                                 | [operations.CreatePromptLoadBalancerPromptsType](../../models/operations/createpromptloadbalancerpromptstype.md)       | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `models`                                                                                                               | [operations.CreatePromptLoadBalancerPromptsModels](../../models/operations/createpromptloadbalancerpromptsmodels.md)[] | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |