# InvokeEvalResponseBodyLLM

## Example Usage

```typescript
import { InvokeEvalResponseBodyLLM } from "@orq-ai/node/models/operations";

let value: InvokeEvalResponseBodyLLM = {
  type: "llm_evaluator",
  value: {
    workflowRunId: "<id>",
    value: 2734.06,
  },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                     | *"llm_evaluator"*                                                                                                          | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `value`                                                                                                                    | [operations.InvokeEvalResponseBodyEvalsResponseValue](../../models/operations/invokeevalresponsebodyevalsresponsevalue.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |