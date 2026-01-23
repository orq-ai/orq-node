# ListAgentsLoadBalancer1

## Example Usage

```typescript
import { ListAgentsLoadBalancer1 } from "@orq-ai/node/models/operations";

let value: ListAgentsLoadBalancer1 = {
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

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `type`                                                                                               | [operations.ListAgentsLoadBalancerType](../../models/operations/listagentsloadbalancertype.md)       | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `models`                                                                                             | [operations.ListAgentsLoadBalancerModels](../../models/operations/listagentsloadbalancermodels.md)[] | :heavy_check_mark:                                                                                   | N/A                                                                                                  |