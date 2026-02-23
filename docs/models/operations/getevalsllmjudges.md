# GetEvalsLLMJudges

## Example Usage

```typescript
import { GetEvalsLLMJudges } from "@orq-ai/node/models/operations";

let value: GetEvalsLLMJudges = {
  model: "Element",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `model`                                                                              | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `retry`                                                                              | [operations.GetEvalsLLMRetry](../../models/operations/getevalsllmretry.md)           | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `fallbacks`                                                                          | [operations.GetEvalsLLMFallbacks](../../models/operations/getevalsllmfallbacks.md)[] | :heavy_minus_sign:                                                                   | N/A                                                                                  |