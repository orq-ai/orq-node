# UpdateEvalLLMJudges

## Example Usage

```typescript
import { UpdateEvalLLMJudges } from "@orq-ai/node/models/operations";

let value: UpdateEvalLLMJudges = {
  model: "Explorer",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `model`                                                                                  | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `retry`                                                                                  | [operations.UpdateEvalLLMRetry](../../models/operations/updateevalllmretry.md)           | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `fallbacks`                                                                              | [operations.UpdateEvalLLMFallbacks](../../models/operations/updateevalllmfallbacks.md)[] | :heavy_minus_sign:                                                                       | N/A                                                                                      |