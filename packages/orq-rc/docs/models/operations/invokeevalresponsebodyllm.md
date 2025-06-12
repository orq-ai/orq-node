# InvokeEvalResponseBodyLLM

## Example Usage

```typescript
import { InvokeEvalResponseBodyLLM } from "@orq-ai/node/models/operations";

let value: InvokeEvalResponseBodyLLM = {
  type: "llm_evaluator",
  value: {
    workflowRunId: "<id>",
    value: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                          | Type                                                                                                                                                           | Required                                                                                                                                                       | Description                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                         | [operations.InvokeEvalResponseBodyEvalsResponse200ApplicationJson7Type](../../models/operations/invokeevalresponsebodyevalsresponse200applicationjson7type.md) | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `value`                                                                                                                                                        | [operations.InvokeEvalResponseBodyEvalsResponseValue](../../models/operations/invokeevalresponsebodyevalsresponsevalue.md)                                     | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |