# CreateCompletionLoadBalancerRouterCompletions1

## Example Usage

```typescript
import { CreateCompletionLoadBalancerRouterCompletions1 } from "@orq-ai/node/models/operations";

let value: CreateCompletionLoadBalancerRouterCompletions1 = {
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

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                             | [operations.CreateCompletionLoadBalancerRouterCompletionsType](../../models/operations/createcompletionloadbalancerroutercompletionstype.md)       | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `models`                                                                                                                                           | [operations.CreateCompletionLoadBalancerRouterCompletionsModels](../../models/operations/createcompletionloadbalancerroutercompletionsmodels.md)[] | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |