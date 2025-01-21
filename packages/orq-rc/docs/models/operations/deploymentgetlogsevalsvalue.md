# DeploymentGetLogsEvalsValue

## Example Usage

```typescript
import { DeploymentGetLogsEvalsValue } from "@orq-ai/node/models/operations";

let value: DeploymentGetLogsEvalsValue = {
  rouge1: {
    f1: 2783.55,
    precision: 583.92,
    recall: 9396.85,
  },
  rouge2: {
    f1: 996.22,
    precision: 2705.26,
    recall: 9474.49,
  },
  rougeL: {
    f1: 5777.75,
    precision: 8530.7,
    recall: 6951.25,
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `rouge1`                                               | [operations.Rouge1](../../models/operations/rouge1.md) | :heavy_check_mark:                                     | N/A                                                    |
| `rouge2`                                               | [operations.Rouge2](../../models/operations/rouge2.md) | :heavy_check_mark:                                     | N/A                                                    |
| `rougeL`                                               | [operations.RougeL](../../models/operations/rougel.md) | :heavy_check_mark:                                     | N/A                                                    |