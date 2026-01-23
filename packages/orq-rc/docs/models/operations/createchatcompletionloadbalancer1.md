# CreateChatCompletionLoadBalancer1

## Example Usage

```typescript
import { CreateChatCompletionLoadBalancer1 } from "@orq-ai/node/models/operations";

let value: CreateChatCompletionLoadBalancer1 = {
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

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                   | [operations.CreateChatCompletionLoadBalancerType](../../models/operations/createchatcompletionloadbalancertype.md)       | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `models`                                                                                                                 | [operations.CreateChatCompletionLoadBalancerModels](../../models/operations/createchatcompletionloadbalancermodels.md)[] | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |