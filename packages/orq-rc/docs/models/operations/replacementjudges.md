# ReplacementJudges

## Example Usage

```typescript
import { ReplacementJudges } from "@orq-ai/node/models/operations";

let value: ReplacementJudges = {
  model: "XTS",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `model`                                                                                      | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `retry`                                                                                      | [operations.UpdateEvalEvalsRetry](../../models/operations/updateevalevalsretry.md)           | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `fallbacks`                                                                                  | [operations.UpdateEvalEvalsFallbacks](../../models/operations/updateevalevalsfallbacks.md)[] | :heavy_minus_sign:                                                                           | N/A                                                                                          |