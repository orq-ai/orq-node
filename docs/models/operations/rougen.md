# RougeN

## Example Usage

```typescript
import { RougeN } from "@orq-ai/node/models/operations";

let value: RougeN = {
  type: "rouge_n",
  value: {
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
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `type`                                                                                           | *"rouge_n"*                                                                                      | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `value`                                                                                          | [operations.InvokeEvalResponseBodyValue](../../models/operations/invokeevalresponsebodyvalue.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |