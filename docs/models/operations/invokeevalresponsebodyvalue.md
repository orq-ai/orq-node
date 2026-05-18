# InvokeEvalResponseBodyValue

## Example Usage

```typescript
import { InvokeEvalResponseBodyValue } from "@orq-ai/node/models/operations";

let value: InvokeEvalResponseBodyValue = {
  rouge1: {
    f1: 6800.91,
    precision: 4801.64,
    recall: 5836.36,
  },
  rouge2: {
    f1: 3668.69,
    precision: 5867.98,
    recall: 8581.43,
  },
  rougeL: {
    f1: 7091.77,
    precision: 9654.48,
    recall: 7015.78,
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `rouge1`                                               | [operations.Rouge1](../../models/operations/rouge1.md) | :heavy_check_mark:                                     | N/A                                                    |
| `rouge2`                                               | [operations.Rouge2](../../models/operations/rouge2.md) | :heavy_check_mark:                                     | N/A                                                    |
| `rougeL`                                               | [operations.RougeL](../../models/operations/rougel.md) | :heavy_check_mark:                                     | N/A                                                    |