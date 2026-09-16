# OneReplacementJudges

## Example Usage

```typescript
import { OneReplacementJudges } from "@orq-ai/node/models/operations";

let value: OneReplacementJudges = {
  model: "Expedition",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `model`                                                                              | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `retry`                                                                              | [operations.CreateEval1Retry](../../models/operations/createeval1retry.md)           | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `fallbacks`                                                                          | [operations.CreateEval1Fallbacks](../../models/operations/createeval1fallbacks.md)[] | :heavy_minus_sign:                                                                   | N/A                                                                                  |