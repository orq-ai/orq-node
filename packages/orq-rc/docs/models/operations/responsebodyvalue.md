# ResponseBodyValue

## Example Usage

```typescript
import { ResponseBodyValue } from "@orq-ai/node/models/operations";

let value: ResponseBodyValue = {
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
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `rouge1`                                               | [operations.Rouge1](../../models/operations/rouge1.md) | :heavy_check_mark:                                     | N/A                                                    |
| `rouge2`                                               | [operations.Rouge2](../../models/operations/rouge2.md) | :heavy_check_mark:                                     | N/A                                                    |
| `rougeL`                                               | [operations.RougeL](../../models/operations/rougel.md) | :heavy_check_mark:                                     | N/A                                                    |