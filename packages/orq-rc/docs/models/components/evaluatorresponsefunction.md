# EvaluatorResponseFunction

## Example Usage

```typescript
import { EvaluatorResponseFunction } from "@orq-ai/node/models/components";

let value: EvaluatorResponseFunction = {
  id: "<id>",
  description: "amount faithfully whoa eek cheerful pfft",
  type: "function_eval",
  outputType: "string",
  functionParams: {
    type: "keywords_match",
    keywords: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  key: "<key>",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                             | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `description`                                                                                                    | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `created`                                                                                                        | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `updated`                                                                                                        | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `updatedById`                                                                                                    | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `projectId`                                                                                                      | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | Unique identifier of the project owning this evaluator.                                                          |
| `guardrailConfig`                                                                                                | *any*                                                                                                            | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `type`                                                                                                           | *"function_eval"*                                                                                                | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `outputType`                                                                                                     | [components.EvaluatorResponseFunctionOutputType](../../models/components/evaluatorresponsefunctionoutputtype.md) | :heavy_check_mark:                                                                                               | The type of output expected from the evaluator                                                                   |
| `functionParams`                                                                                                 | *components.FunctionParams*                                                                                      | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `key`                                                                                                            | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |