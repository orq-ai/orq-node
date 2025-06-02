# EvalsRagasFaithfulnessRequestBody

## Example Usage

```typescript
import { EvalsRagasFaithfulnessRequestBody } from "@orq-ai/node/models/operations";

let value: EvalsRagasFaithfulnessRequestBody = {
  input: "<value>",
  output: "<value>",
  model: "XTS",
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `input`                               | *string*                              | :heavy_check_mark:                    | Latest user message                   |
| `output`                              | *string*                              | :heavy_check_mark:                    | The generated response from the model |
| `model`                               | *string*                              | :heavy_check_mark:                    | N/A                                   |
| `retrievals`                          | *string*[]                            | :heavy_minus_sign:                    | Knowledge base retrievals             |