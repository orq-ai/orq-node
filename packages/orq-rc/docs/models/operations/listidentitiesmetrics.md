# ListIdentitiesMetrics

## Example Usage

```typescript
import { ListIdentitiesMetrics } from "@orq-ai/node/models/operations";

let value: ListIdentitiesMetrics = {
  totalCost: 100,
  totalTokens: 1000,
  totalRequests: 1000,
  errorRate: 22,
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               | Example                                   |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `totalCost`                               | *number*                                  | :heavy_check_mark:                        | Total cost in dollars of the last 30 days | 100                                       |
| `totalTokens`                             | *number*                                  | :heavy_check_mark:                        | Total tokens of the last 30 days          | 1000                                      |
| `totalRequests`                           | *number*                                  | :heavy_check_mark:                        | Total requests of the last 30 days        | 1000                                      |
| `errorRate`                               | *number*                                  | :heavy_check_mark:                        | P50 error rate of the last 30 days        | 22                                        |