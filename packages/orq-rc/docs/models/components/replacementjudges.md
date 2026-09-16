# ReplacementJudges

## Example Usage

```typescript
import { ReplacementJudges } from "@orq-ai/node/models/components";

let value: ReplacementJudges = {
  model: "XTS",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `model`                                                                                                | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `retry`                                                                                                | [components.EvaluatorResponseLlmRetry](../../models/components/evaluatorresponsellmretry.md)           | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `fallbacks`                                                                                            | [components.EvaluatorResponseLlmFallbacks](../../models/components/evaluatorresponsellmfallbacks.md)[] | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |