# InvokeEvalResponseBodyEvalsValue

## Example Usage

```typescript
import { InvokeEvalResponseBodyEvalsValue } from "@orq-ai/node/models/operations";

let value: InvokeEvalResponseBodyEvalsValue = {
  value: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `workflowRunId`                                                            | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `traceId`                                                                  | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `value`                                                                    | *operations.InvokeEvalResponseBodyEvalsResponse200ApplicationJSONValue*    | :heavy_check_mark:                                                         | N/A                                                                        |
| `explanation`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `originalValue`                                                            | *operations.OriginalValue*                                                 | :heavy_minus_sign:                                                         | N/A                                                                        |
| `originalExplanation`                                                      | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `jury`                                                                     | [operations.ResponseBodyJury](../../models/operations/responsebodyjury.md) | :heavy_minus_sign:                                                         | N/A                                                                        |