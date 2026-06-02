# EmbeddingLoadBalancerConfig

## Example Usage

```typescript
import { EmbeddingLoadBalancerConfig } from "@orq-ai/node/models/components";

let value: EmbeddingLoadBalancerConfig = {
  models: [],
  type: "weight_based",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `models`                                                                                                     | [components.EmbeddingLoadBalancerModelConfig](../../models/components/embeddingloadbalancermodelconfig.md)[] | :heavy_check_mark:                                                                                           | Array of models with weights for load balancing requests.                                                    |
| `type`                                                                                                       | [components.EmbeddingLoadBalancerConfigType](../../models/components/embeddingloadbalancerconfigtype.md)     | :heavy_check_mark:                                                                                           | Load balancer type.                                                                                          |