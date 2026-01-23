# ListAgentsLoadBalancerAgents1

## Example Usage

```typescript
import { ListAgentsLoadBalancerAgents1 } from "@orq-ai/node/models/operations";

let value: ListAgentsLoadBalancerAgents1 = {
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

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                           | [operations.ListAgentsLoadBalancerAgentsType](../../models/operations/listagentsloadbalanceragentstype.md)       | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `models`                                                                                                         | [operations.ListAgentsLoadBalancerAgentsModels](../../models/operations/listagentsloadbalanceragentsmodels.md)[] | :heavy_check_mark:                                                                                               | N/A                                                                                                              |