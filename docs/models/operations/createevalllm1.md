# CreateEvalLlm1

## Example Usage

```typescript
import { CreateEvalLlm1 } from "@orq-ai/node/models/operations";

let value: CreateEvalLlm1 = {
  id: "<id>",
  description: "stump geez anenst gadzooks yuck hype that obnoxiously pasta",
  type: "llm_eval",
  prompt: "<value>",
  key: "<key>",
  mode: "single",
  model: "Silverado",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `description`                                                                          | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `created`                                                                              | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `updated`                                                                              | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `guardrailConfig`                                                                      | *operations.CreateEvalLLMEvalsGuardrailConfig*                                         | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `type`                                                                                 | [operations.CreateEvalLLMEvalsType](../../models/operations/createevalllmevalstype.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `repetitions`                                                                          | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `prompt`                                                                               | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `key`                                                                                  | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `mode`                                                                                 | *"single"*                                                                             | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `model`                                                                                | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |