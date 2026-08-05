# ResponseBodyLLM

## Example Usage

```typescript
import { ResponseBodyLLM } from "@orq-ai/node/models/operations";

let value: ResponseBodyLLM = {
  type: "llm_evaluator",
  value: {
    value: 3319.26,
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                     | *"llm_evaluator"*                                                                                          | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `value`                                                                                                    | [operations.InvokeEvalResponseBodyEvalsValue](../../models/operations/invokeevalresponsebodyevalsvalue.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |