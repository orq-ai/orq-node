# LoadBalancerConfigType

Strategy used to pick a model: weight_based splits traffic by weight, round_robin rotates through the list, latency_based favors the fastest model. An unrecognized value falls back to weight_based.

## Example Usage

```typescript
import { LoadBalancerConfigType } from "@orq-ai/node/models/components";

let value: LoadBalancerConfigType = "latency_based";
```

## Values

```typescript
"weight_based" | "round_robin" | "latency_based"
```