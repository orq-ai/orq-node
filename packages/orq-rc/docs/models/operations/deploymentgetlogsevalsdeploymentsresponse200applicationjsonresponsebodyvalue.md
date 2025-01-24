# DeploymentGetLogsEvalsDeploymentsResponse200ApplicationJSONResponseBodyValue

## Example Usage

```typescript
import { DeploymentGetLogsEvalsDeploymentsResponse200ApplicationJSONResponseBodyValue } from "@orq-ai/node/models/operations";

let value:
  DeploymentGetLogsEvalsDeploymentsResponse200ApplicationJSONResponseBodyValue =
    {
      rouge1: {
        f1: 8031.86,
        precision: 750.04,
        recall: 8001.68,
      },
      rouge2: {
        f1: 6626.33,
        precision: 9057.38,
        recall: 4577.97,
      },
      rougeL: {
        f1: 5033.38,
        precision: 8373.14,
        recall: 4837.88,
      },
    };
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `rouge1`                                                         | [operations.EvalsRouge1](../../models/operations/evalsrouge1.md) | :heavy_check_mark:                                               | N/A                                                              |
| `rouge2`                                                         | [operations.EvalsRouge2](../../models/operations/evalsrouge2.md) | :heavy_check_mark:                                               | N/A                                                              |
| `rougeL`                                                         | [operations.EvalsRougeL](../../models/operations/evalsrougel.md) | :heavy_check_mark:                                               | N/A                                                              |