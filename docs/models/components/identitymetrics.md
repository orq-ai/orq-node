# IdentityMetrics

## Example Usage

```typescript
import { IdentityMetrics } from "@orq-ai/node/models/components";

let value: IdentityMetrics = {
  totalTokens: 9250.02,
  totalCost: 7014.52,
  totalRequests: 8503.21,
  errorRate: 4536.53,
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `totalTokens`                                   | *number*                                        | :heavy_check_mark:                              | Total token count attributed to the identity.   |
| `totalCost`                                     | *number*                                        | :heavy_check_mark:                              | Total cost attributed to the identity.          |
| `totalRequests`                                 | *number*                                        | :heavy_check_mark:                              | Total request count attributed to the identity. |
| `errorRate`                                     | *number*                                        | :heavy_check_mark:                              | Fraction of attributed requests that failed.    |