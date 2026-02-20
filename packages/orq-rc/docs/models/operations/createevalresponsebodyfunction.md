# CreateEvalResponseBodyFunction

## Example Usage

```typescript
import { CreateEvalResponseBodyFunction } from "@orq-ai/node/models/operations";

let value: CreateEvalResponseBodyFunction = {
  id: "<id>",
  description: "worst than stale eek finally",
  type: "function_eval",
  functionParams: {
    type: "grammar_diversity",
  },
  key: "<key>",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                     | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `description`                                                                                                            | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `created`                                                                                                                | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `updated`                                                                                                                | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `guardrailConfig`                                                                                                        | *operations.CreateEvalResponseBodyEvalsResponseGuardrailConfig*                                                          | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `type`                                                                                                                   | [operations.CreateEvalResponseBodyEvalsResponseType](../../models/operations/createevalresponsebodyevalsresponsetype.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `functionParams`                                                                                                         | *operations.FunctionParams*                                                                                              | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `key`                                                                                                                    | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |