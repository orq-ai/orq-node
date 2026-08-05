# RougeN

## Example Usage

```typescript
import { RougeN } from "@orq-ai/node/models/operations";

let value: RougeN = {
  type: "rouge_n",
  value: {
    rouge1: {
      f1: 6828.21,
      precision: 5672.64,
      recall: 4400.24,
    },
    rouge2: {
      f1: 1693.15,
      precision: 8335.13,
      recall: 6138.59,
    },
    rougeL: {
      f1: 263.41,
      precision: 2844.53,
      recall: 3104.52,
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `type`                                                                       | *"rouge_n"*                                                                  | :heavy_check_mark:                                                           | N/A                                                                          |
| `value`                                                                      | [operations.ResponseBodyValue](../../models/operations/responsebodyvalue.md) | :heavy_check_mark:                                                           | N/A                                                                          |