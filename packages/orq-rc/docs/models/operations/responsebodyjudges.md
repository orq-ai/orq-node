# ResponseBodyJudges

## Example Usage

```typescript
import { ResponseBodyJudges } from "@orq-ai/node/models/operations";

let value: ResponseBodyJudges = {
  model: {
    id: "<id>",
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `model`                                                                                                              | [operations.GetEvalResponseBodyEvalsResponseModel](../../models/operations/getevalresponsebodyevalsresponsemodel.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `retry`                                                                                                              | [operations.ResponseBodyRetry](../../models/operations/responsebodyretry.md)                                         | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `fallbacks`                                                                                                          | [operations.ResponseBodyFallbacks](../../models/operations/responsebodyfallbacks.md)[]                               | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |