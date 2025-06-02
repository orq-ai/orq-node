# EvalsRagasCorrectnessRequestBody

## Example Usage

```typescript
import { EvalsRagasCorrectnessRequestBody } from "@orq-ai/node/models/operations";

let value: EvalsRagasCorrectnessRequestBody = {
  input: "<value>",
  output: "<value>",
  model: "Focus",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `input`                                  | *string*                                 | :heavy_check_mark:                       | Latest user message                      |
| `output`                                 | *string*                                 | :heavy_check_mark:                       | The generated response from the model    |
| `model`                                  | *string*                                 | :heavy_check_mark:                       | N/A                                      |
| `reference`                              | *string*                                 | :heavy_minus_sign:                       | The reference used to compare the output |