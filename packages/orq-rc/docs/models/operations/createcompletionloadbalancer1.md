# CreateCompletionLoadBalancer1

## Example Usage

```typescript
import { CreateCompletionLoadBalancer1 } from "@orq-ai/node/models/operations";

let value: CreateCompletionLoadBalancer1 = {
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

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                           | [operations.CreateCompletionLoadBalancerType](../../models/operations/createcompletionloadbalancertype.md)       | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `models`                                                                                                         | [operations.CreateCompletionLoadBalancerModels](../../models/operations/createcompletionloadbalancermodels.md)[] | :heavy_check_mark:                                                                                               | N/A                                                                                                              |