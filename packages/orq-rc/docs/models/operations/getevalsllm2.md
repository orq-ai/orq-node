# GetEvalsLlm2

## Example Usage

```typescript
import { GetEvalsLlm2 } from "@orq-ai/node/models/operations";

let value: GetEvalsLlm2 = {
  id: "<id>",
  description: "whereas barring without or annual",
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

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `id`                                                                               | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `description`                                                                      | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `created`                                                                          | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `updated`                                                                          | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `guardrailConfig`                                                                  | *operations.GetEvalsLLMEvalsGuardrailConfig*                                       | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `type`                                                                             | [operations.GetEvalsLLMEvalsType](../../models/operations/getevalsllmevalstype.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `repetitions`                                                                      | *number*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `prompt`                                                                           | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `key`                                                                              | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `mode`                                                                             | *"jury"*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `jury`                                                                             | [operations.GetEvalsLLMJury](../../models/operations/getevalsllmjury.md)           | :heavy_check_mark:                                                                 | N/A                                                                                |