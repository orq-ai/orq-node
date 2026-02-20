# CreateEvalLLMReplacementJudges

## Example Usage

```typescript
import { CreateEvalLLMReplacementJudges } from "@orq-ai/node/models/operations";

let value: CreateEvalLLMReplacementJudges = {
  model: "Challenger",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `model`                                                                                            | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `retry`                                                                                            | [operations.CreateEvalLLMEvalsRetry](../../models/operations/createevalllmevalsretry.md)           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `fallbacks`                                                                                        | [operations.CreateEvalLLMEvalsFallbacks](../../models/operations/createevalllmevalsfallbacks.md)[] | :heavy_minus_sign:                                                                                 | N/A                                                                                                |