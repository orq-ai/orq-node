# GetEvalsLLMReplacementJudges

## Example Usage

```typescript
import { GetEvalsLLMReplacementJudges } from "@orq-ai/node/models/operations";

let value: GetEvalsLLMReplacementJudges = {
  model: "Fortwo",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `model`                                                                                        | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `retry`                                                                                        | [operations.GetEvalsLLMEvalsRetry](../../models/operations/getevalsllmevalsretry.md)           | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `fallbacks`                                                                                    | [operations.GetEvalsLLMEvalsFallbacks](../../models/operations/getevalsllmevalsfallbacks.md)[] | :heavy_minus_sign:                                                                             | N/A                                                                                            |