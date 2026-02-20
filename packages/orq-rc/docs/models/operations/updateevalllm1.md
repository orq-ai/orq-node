# UpdateEvalLlm1

## Example Usage

```typescript
import { UpdateEvalLlm1 } from "@orq-ai/node/models/operations";

let value: UpdateEvalLlm1 = {
  id: "<id>",
  description: "opposite monthly last before eek",
  type: "llm_eval",
  prompt: "<value>",
  key: "<key>",
  mode: "single",
  model: "A4",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `id`                                                                         | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `description`                                                                | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `created`                                                                    | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `updated`                                                                    | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `guardrailConfig`                                                            | *operations.UpdateEvalLLMGuardrailConfig*                                    | :heavy_minus_sign:                                                           | N/A                                                                          |
| `type`                                                                       | [operations.UpdateEvalLLMType](../../models/operations/updateevalllmtype.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `repetitions`                                                                | *number*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `prompt`                                                                     | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `key`                                                                        | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `mode`                                                                       | *"single"*                                                                   | :heavy_check_mark:                                                           | N/A                                                                          |
| `model`                                                                      | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |