# UpdateEvalLlm2

## Example Usage

```typescript
import { UpdateEvalLlm2 } from "@orq-ai/node/models/operations";

let value: UpdateEvalLlm2 = {
  id: "<id>",
  description: "singe mmm resolve briskly duh while mid cautiously uh-huh",
  type: "llm_eval",
  prompt: "<value>",
  key: "<key>",
  mode: "jury",
  jury: {
    judges: [
      {
        model: "Alpine",
      },
    ],
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `description`                                                                          | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `created`                                                                              | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `updated`                                                                              | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `guardrailConfig`                                                                      | *operations.UpdateEvalLLMEvalsGuardrailConfig*                                         | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `type`                                                                                 | [operations.UpdateEvalLLMEvalsType](../../models/operations/updateevalllmevalstype.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `repetitions`                                                                          | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `prompt`                                                                               | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `key`                                                                                  | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `mode`                                                                                 | *"jury"*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `jury`                                                                                 | [operations.UpdateEvalLLMJury](../../models/operations/updateevalllmjury.md)           | :heavy_check_mark:                                                                     | N/A                                                                                    |