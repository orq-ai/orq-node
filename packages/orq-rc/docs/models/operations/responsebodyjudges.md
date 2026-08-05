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

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `model`                                                                                                        | [operations.GetEvalResponseBodyEvalsModel](../../models/operations/getevalresponsebodyevalsmodel.md)           | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `retry`                                                                                                        | [operations.GetEvalResponseBodyEvalsRetry](../../models/operations/getevalresponsebodyevalsretry.md)           | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `fallbacks`                                                                                                    | [operations.GetEvalResponseBodyEvalsFallbacks](../../models/operations/getevalresponsebodyevalsfallbacks.md)[] | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |