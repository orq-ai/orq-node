# UpdateAgentLoadBalancerAgentsResponse2001

## Example Usage

```typescript
import { UpdateAgentLoadBalancerAgentsResponse2001 } from "@orq-ai/node/models/operations";

let value: UpdateAgentLoadBalancerAgentsResponse2001 = {
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

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                   | [operations.UpdateAgentLoadBalancerAgentsResponse200Type](../../models/operations/updateagentloadbalanceragentsresponse200type.md)       | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `models`                                                                                                                                 | [operations.UpdateAgentLoadBalancerAgentsResponse200Models](../../models/operations/updateagentloadbalanceragentsresponse200models.md)[] | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |