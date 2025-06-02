# EvalsRagasMaliciousnessRequestBody

## Example Usage

```typescript
import { EvalsRagasMaliciousnessRequestBody } from "@orq-ai/node/models/operations";

let value: EvalsRagasMaliciousnessRequestBody = {
  input: "<value>",
  output: "<value>",
  model: "A4",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `input`                                  | *string*                                 | :heavy_check_mark:                       | Latest user message                      |
| `output`                                 | *string*                                 | :heavy_check_mark:                       | The generated response from the model    |
| `model`                                  | *string*                                 | :heavy_check_mark:                       | N/A                                      |
| `reference`                              | *string*                                 | :heavy_minus_sign:                       | The reference used to compare the output |