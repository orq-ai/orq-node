# LoadBalancerConfig

## Example Usage

```typescript
import { LoadBalancerConfig } from "@orq-ai/node/models/components";

let value: LoadBalancerConfig = {
  models: [
    {
      model: "Cruze",
      weight: 843.73,
    },
  ],
  type: "weight_based",
};
```

## Fields

| Field                                                                                                                                                                                                 | Type                                                                                                                                                                                                  | Required                                                                                                                                                                                              | Description                                                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `models`                                                                                                                                                                                              | [components.LoadBalancerModelConfig](../../models/components/loadbalancermodelconfig.md)[]                                                                                                            | :heavy_check_mark:                                                                                                                                                                                    | N/A                                                                                                                                                                                                   |
| `type`                                                                                                                                                                                                | [components.LoadBalancerConfigType](../../models/components/loadbalancerconfigtype.md)                                                                                                                | :heavy_check_mark:                                                                                                                                                                                    | Strategy used to pick a model: weight_based splits traffic by weight, round_robin rotates through the list, latency_based favors the fastest model. An unrecognized value falls back to weight_based. |