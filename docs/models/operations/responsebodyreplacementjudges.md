# ResponseBodyReplacementJudges

## Example Usage

```typescript
import { ResponseBodyReplacementJudges } from "@orq-ai/node/models/operations";

let value: ResponseBodyReplacementJudges = {
  model: {
    id: "<id>",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `model`                                                                                              | [operations.GetEvalResponseBodyEvalsModel](../../models/operations/getevalresponsebodyevalsmodel.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `retry`                                                                                              | [operations.GetEvalResponseBodyRetry](../../models/operations/getevalresponsebodyretry.md)           | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `fallbacks`                                                                                          | [operations.GetEvalResponseBodyFallbacks](../../models/operations/getevalresponsebodyfallbacks.md)[] | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |