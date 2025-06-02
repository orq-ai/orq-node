# RunBertScoreResponseBody

Returns the BERT Score evaluation result

## Example Usage

```typescript
import { RunBertScoreResponseBody } from "@orq-ai/node/models/operations";

let value: RunBertScoreResponseBody = {
  value: {
    f1: 367.41,
    precision: 5398.58,
    recall: 2178.88,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `value`                                                                      | [operations.RunBertScoreValue](../../models/operations/runbertscorevalue.md) | :heavy_check_mark:                                                           | N/A                                                                          |