# ReplacementJudges

## Example Usage

```typescript
import { ReplacementJudges } from "@orq-ai/node/models/operations";

let value: ReplacementJudges = {
  model: "XTS",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `model`                                                                            | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `retry`                                                                            | [operations.UpdateEvalRetry](../../models/operations/updateevalretry.md)           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `fallbacks`                                                                        | [operations.UpdateEvalFallbacks](../../models/operations/updateevalfallbacks.md)[] | :heavy_minus_sign:                                                                 | N/A                                                                                |