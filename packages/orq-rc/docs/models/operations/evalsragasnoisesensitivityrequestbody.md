# EvalsRagasNoiseSensitivityRequestBody

## Example Usage

```typescript
import { EvalsRagasNoiseSensitivityRequestBody } from "@orq-ai/node/models/operations";

let value: EvalsRagasNoiseSensitivityRequestBody = {
  query: "<value>",
  output: "<value>",
  model: "Fiesta",
  reference: "<value>",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `query`                                                           | *string*                                                          | :heavy_check_mark:                                                | Latest user message                                               |
| `output`                                                          | *string*                                                          | :heavy_check_mark:                                                | The generated response from the model                             |
| `model`                                                           | *string*                                                          | :heavy_check_mark:                                                | N/A                                                               |
| `reference`                                                       | *string*                                                          | :heavy_check_mark:                                                | The ground truth answer to evaluate noise sensitivity against     |
| `retrievals`                                                      | *string*[]                                                        | :heavy_minus_sign:                                                | Knowledge base retrievals that may contain irrelevant information |