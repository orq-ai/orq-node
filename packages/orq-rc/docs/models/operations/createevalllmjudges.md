# CreateEvalLLMJudges

## Example Usage

```typescript
import { CreateEvalLLMJudges } from "@orq-ai/node/models/operations";

let value: CreateEvalLLMJudges = {
  model: "Grand Caravan",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `model`                                                                                                            | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `retry`                                                                                                            | [operations.CreateEvalLLMEvalsResponseRetry](../../models/operations/createevalllmevalsresponseretry.md)           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `fallbacks`                                                                                                        | [operations.CreateEvalLLMEvalsResponseFallbacks](../../models/operations/createevalllmevalsresponsefallbacks.md)[] | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |