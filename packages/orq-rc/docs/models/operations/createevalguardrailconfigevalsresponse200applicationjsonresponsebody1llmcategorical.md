# CreateEvalGuardrailConfigEvalsResponse200ApplicationJSONResponseBody1LLMCategorical

## Example Usage

```typescript
import {
  CreateEvalGuardrailConfigEvalsResponse200ApplicationJSONResponseBody1LLMCategorical,
} from "@orq-ai/node/models/operations";

let value:
  CreateEvalGuardrailConfigEvalsResponse200ApplicationJSONResponseBody1LLMCategorical =
    {
      enabled: true,
      type: "categorical",
      values: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
    };
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `enabled`          | *boolean*          | :heavy_check_mark: | N/A                |
| `alertOnFailure`   | *boolean*          | :heavy_minus_sign: | N/A                |
| `type`             | *"categorical"*    | :heavy_check_mark: | N/A                |
| `values`           | *string*[]         | :heavy_check_mark: | N/A                |