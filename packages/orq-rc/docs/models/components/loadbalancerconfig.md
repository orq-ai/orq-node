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
  type: "<value>",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `models`                                                                                   | [components.LoadBalancerModelConfig](../../models/components/loadbalancermodelconfig.md)[] | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `type`                                                                                     | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |