# BERTScore

## Example Usage

```typescript
import { BERTScore } from "@orq-ai/node/models/operations";

let value: BERTScore = {
  type: "bert_score",
  value: {
    f1: 6062.58,
    precision: 420.31,
    recall: 8918.05,
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `type`                                                                                           | *"bert_score"*                                                                                   | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `value`                                                                                          | [operations.InvokeEvalResponseBodyValue](../../models/operations/invokeevalresponsebodyvalue.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |