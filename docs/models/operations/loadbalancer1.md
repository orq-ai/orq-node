# LoadBalancer1

## Example Usage

```typescript
import { LoadBalancer1 } from "@orq-ai/node/models/operations";

let value: LoadBalancer1 = {
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

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `type`                                                                     | [operations.LoadBalancerType](../../models/operations/loadbalancertype.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `models`                                                                   | [operations.Models](../../models/operations/models.md)[]                   | :heavy_check_mark:                                                         | N/A                                                                        |