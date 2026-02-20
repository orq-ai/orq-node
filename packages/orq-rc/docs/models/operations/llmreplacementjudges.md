# LLMReplacementJudges

## Example Usage

```typescript
import { LLMReplacementJudges } from "@orq-ai/node/models/operations";

let value: LLMReplacementJudges = {
  model: "Camaro",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `model`                                                              | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `retry`                                                              | [operations.LLMRetry](../../models/operations/llmretry.md)           | :heavy_minus_sign:                                                   | N/A                                                                  |
| `fallbacks`                                                          | [operations.LLMFallbacks](../../models/operations/llmfallbacks.md)[] | :heavy_minus_sign:                                                   | N/A                                                                  |