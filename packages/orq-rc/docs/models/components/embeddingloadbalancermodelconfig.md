# EmbeddingLoadBalancerModelConfig

## Example Usage

```typescript
import { EmbeddingLoadBalancerModelConfig } from "@orq-ai/node/models/components";

let value: EmbeddingLoadBalancerModelConfig = {
  model: "Colorado",
  weight: 2919.47,
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `model`                                           | *string*                                          | :heavy_check_mark:                                | Model identifier for load balancing.              |
| `weight`                                          | *number*                                          | :heavy_check_mark:                                | Weight assigned to this model for load balancing. |