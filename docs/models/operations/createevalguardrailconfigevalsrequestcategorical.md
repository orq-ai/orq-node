# CreateEvalGuardrailConfigEvalsRequestCategorical

## Example Usage

```typescript
import { CreateEvalGuardrailConfigEvalsRequestCategorical } from "@orq-ai/node/models/operations";

let value: CreateEvalGuardrailConfigEvalsRequestCategorical = {
  enabled: false,
  type: "categorical",
  values: [
    "<value 1>",
    "<value 2>",
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