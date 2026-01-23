# CreateChatCompletionLoadBalancerRouterChatCompletions1

## Example Usage

```typescript
import { CreateChatCompletionLoadBalancerRouterChatCompletions1 } from "@orq-ai/node/models/operations";

let value: CreateChatCompletionLoadBalancerRouterChatCompletions1 = {
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

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                             | [operations.CreateChatCompletionLoadBalancerRouterChatCompletionsType](../../models/operations/createchatcompletionloadbalancerrouterchatcompletionstype.md)       | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `models`                                                                                                                                                           | [operations.CreateChatCompletionLoadBalancerRouterChatCompletionsModels](../../models/operations/createchatcompletionloadbalancerrouterchatcompletionsmodels.md)[] | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |