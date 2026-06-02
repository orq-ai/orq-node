# GuardrailConfigCategorical

## Example Usage

```typescript
import { GuardrailConfigCategorical } from "@orq-ai/node/models/operations";

let value: GuardrailConfigCategorical = {
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
| `alertOnFailure`   | *boolean*          | :heavy_minus_sign: | N/A                |
| `type`             | *"categorical"*    | :heavy_check_mark: | N/A                |
| `values`           | *string*[]         | :heavy_check_mark: | N/A                |