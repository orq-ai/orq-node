# InvokeEvalResponseBodyEvalsResponseValue

## Example Usage

```typescript
import { InvokeEvalResponseBodyEvalsResponseValue } from "@orq-ai/node/models/operations";

let value: InvokeEvalResponseBodyEvalsResponseValue = {
  workflowRunId: "<id>",
  value: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `workflowRunId`                                                            | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `value`                                                                    | *operations.InvokeEvalResponseBodyEvalsResponse200ApplicationJson7Value*   | :heavy_check_mark:                                                         | N/A                                                                        |
| `explanation`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `originalValue`                                                            | *operations.OriginalValue*                                                 | :heavy_minus_sign:                                                         | N/A                                                                        |
| `originalExplanation`                                                      | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `jury`                                                                     | [operations.ResponseBodyJury](../../models/operations/responsebodyjury.md) | :heavy_minus_sign:                                                         | N/A                                                                        |