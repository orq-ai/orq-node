# EvaluatorResponseLlm

## Example Usage

```typescript
import { EvaluatorResponseLlm } from "@orq-ai/node/models/components";

let value: EvaluatorResponseLlm = {
  id: "<id>",
  description: "wetly whereas failing",
  type: "llm_eval",
  prompt: "<value>",
  key: "<key>",
  mode: "jury",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `id`                                                                           | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `description`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `created`                                                                      | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `updated`                                                                      | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `updatedById`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `guardrailConfig`                                                              | *any*                                                                          | :heavy_minus_sign:                                                             | N/A                                                                            |
| `type`                                                                         | *"llm_eval"*                                                                   | :heavy_check_mark:                                                             | N/A                                                                            |
| `repetitions`                                                                  | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `prompt`                                                                       | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `categories`                                                                   | *string*[]                                                                     | :heavy_minus_sign:                                                             | N/A                                                                            |
| `categoricalLabels`                                                            | [components.CategoricalLabels](../../models/components/categoricallabels.md)[] | :heavy_minus_sign:                                                             | N/A                                                                            |
| `datasetId`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `key`                                                                          | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `mode`                                                                         | [components.Mode](../../models/components/mode.md)                             | :heavy_check_mark:                                                             | N/A                                                                            |
| `model`                                                                        | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `jury`                                                                         | [components.Jury](../../models/components/jury.md)                             | :heavy_minus_sign:                                                             | N/A                                                                            |