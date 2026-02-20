# LLMJudges

## Example Usage

```typescript
import { LLMJudges } from "@orq-ai/node/models/operations";

let value: LLMJudges = {
  model: "Model S",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `model`                                                                                  | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `retry`                                                                                  | [operations.CreateEvalLLMRetry](../../models/operations/createevalllmretry.md)           | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `fallbacks`                                                                              | [operations.CreateEvalLLMFallbacks](../../models/operations/createevalllmfallbacks.md)[] | :heavy_minus_sign:                                                                       | N/A                                                                                      |