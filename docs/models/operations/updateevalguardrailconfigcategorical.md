# UpdateEvalGuardrailConfigCategorical

## Example Usage

```typescript
import { UpdateEvalGuardrailConfigCategorical } from "@orq-ai/node/models/operations";

let value: UpdateEvalGuardrailConfigCategorical = {
  enabled: false,
  type: "categorical",
  values: [
    "<value 1>",
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