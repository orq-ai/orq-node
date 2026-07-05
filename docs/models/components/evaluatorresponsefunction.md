# EvaluatorResponseFunction

## Example Usage

```typescript
import { EvaluatorResponseFunction } from "@orq-ai/node/models/components";

let value: EvaluatorResponseFunction = {
  id: "<id>",
  description: "amount faithfully whoa eek cheerful pfft",
  type: "function_eval",
  functionParams: {
    type: "sentences_count",
  },
  key: "<key>",
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `id`                        | *string*                    | :heavy_check_mark:          | N/A                         |
| `description`               | *string*                    | :heavy_check_mark:          | N/A                         |
| `created`                   | *string*                    | :heavy_minus_sign:          | N/A                         |
| `updated`                   | *string*                    | :heavy_minus_sign:          | N/A                         |
| `updatedById`               | *string*                    | :heavy_minus_sign:          | N/A                         |
| `guardrailConfig`           | *any*                       | :heavy_minus_sign:          | N/A                         |
| `type`                      | *"function_eval"*           | :heavy_check_mark:          | N/A                         |
| `functionParams`            | *components.FunctionParams* | :heavy_check_mark:          | N/A                         |
| `key`                       | *string*                    | :heavy_check_mark:          | N/A                         |