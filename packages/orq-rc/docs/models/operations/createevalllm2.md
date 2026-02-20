# CreateEvalLlm2

## Example Usage

```typescript
import { CreateEvalLlm2 } from "@orq-ai/node/models/operations";

let value: CreateEvalLlm2 = {
  id: "<id>",
  description: "event needy since psst shampoo worth whoa",
  type: "llm_eval",
  prompt: "<value>",
  key: "<key>",
  mode: "jury",
  jury: {
    judges: [],
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                   | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `description`                                                                                          | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `created`                                                                                              | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `updated`                                                                                              | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `guardrailConfig`                                                                                      | *operations.CreateEvalLLMEvalsResponseGuardrailConfig*                                                 | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `type`                                                                                                 | [operations.CreateEvalLLMEvalsResponseType](../../models/operations/createevalllmevalsresponsetype.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `repetitions`                                                                                          | *number*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `prompt`                                                                                               | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `key`                                                                                                  | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `mode`                                                                                                 | *"jury"*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `jury`                                                                                                 | [operations.CreateEvalLLMJury](../../models/operations/createevalllmjury.md)                           | :heavy_check_mark:                                                                                     | N/A                                                                                                    |