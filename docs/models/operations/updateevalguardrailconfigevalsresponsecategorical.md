# UpdateEvalGuardrailConfigEvalsResponseCategorical

## Example Usage

```typescript
import { UpdateEvalGuardrailConfigEvalsResponseCategorical } from "@orq-ai/node/models/operations";

let value: UpdateEvalGuardrailConfigEvalsResponseCategorical = {
  enabled: false,
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