# StreamRunAgentLoadBalancerAgentsModels

## Example Usage

```typescript
import { StreamRunAgentLoadBalancerAgentsModels } from "@orq-ai/node/models/operations";

let value: StreamRunAgentLoadBalancerAgentsModels = {
  model: "openai/gpt-4o",
  weight: 0.7,
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      | Example                                          |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `model`                                          | *string*                                         | :heavy_check_mark:                               | Model identifier for load balancing              | openai/gpt-4o                                    |
| `weight`                                         | *number*                                         | :heavy_minus_sign:                               | Weight assigned to this model for load balancing | 0.7                                              |