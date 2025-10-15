# ResponseBodyLLM

## Example Usage

```typescript
import { ResponseBodyLLM } from "@orq-ai/node/models/operations";

let value: ResponseBodyLLM = {
  id: "<id>",
  description: "duh unexpectedly famously handful helplessly around yum qua",
  type: "llm_eval",
  prompt: "<value>",
  key: "<key>",
  model: "Model Y",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `description`                                                                                  | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `created`                                                                                      | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `updated`                                                                                      | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `guardrailConfig`                                                                              | *operations.ResponseBodyGuardrailConfig*                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `type`                                                                                         | [operations.CreateEvalResponseBodyType](../../models/operations/createevalresponsebodytype.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `prompt`                                                                                       | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `key`                                                                                          | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `model`                                                                                        | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |