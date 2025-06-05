# EvalsBertScoreResponseBody

Returns the BERT Score evaluation result

## Example Usage

```typescript
import { EvalsBertScoreResponseBody } from "@orq-ai/node/models/operations";

let value: EvalsBertScoreResponseBody = {
  value: {
    f1: 2039.8,
    precision: 7920.18,
    recall: 1575.47,
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `value`                                                                          | [operations.EvalsBertScoreValue](../../models/operations/evalsbertscorevalue.md) | :heavy_check_mark:                                                               | N/A                                                                              |