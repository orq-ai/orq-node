# UpdateEvalResponseBodyLLM

## Example Usage

```typescript
import { UpdateEvalResponseBodyLLM } from "@orq-ai/node/models/operations";

let value: UpdateEvalResponseBodyLLM = {
  id: "<id>",
  description:
    "boohoo mundane phew friendly chainstay writhing stunt confiscate legend that",
  type: "llm_eval",
  prompt: "<value>",
  key: "<key>",
  model: "Explorer",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `id`                                               | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `description`                                      | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `created`                                          | *string*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `updated`                                          | *string*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `guardrailConfig`                                  | *operations.UpdateEvalResponseBodyGuardrailConfig* | :heavy_minus_sign:                                 | N/A                                                |
| `type`                                             | *"llm_eval"*                                       | :heavy_check_mark:                                 | N/A                                                |
| `prompt`                                           | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `key`                                              | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `model`                                            | *string*                                           | :heavy_check_mark:                                 | N/A                                                |