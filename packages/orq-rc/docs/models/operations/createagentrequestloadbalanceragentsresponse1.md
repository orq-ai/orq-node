# CreateAgentRequestLoadBalancerAgentsResponse1

## Example Usage

```typescript
import { CreateAgentRequestLoadBalancerAgentsResponse1 } from "@orq-ai/node/models/operations";

let value: CreateAgentRequestLoadBalancerAgentsResponse1 = {
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

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                     | [operations.CreateAgentRequestLoadBalancerAgentsResponseType](../../models/operations/createagentrequestloadbalanceragentsresponsetype.md) | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `models`                                                                                                                                   | [operations.CreateAgentRequestLoadBalancerAgentsModels](../../models/operations/createagentrequestloadbalanceragentsmodels.md)[]           | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |