# EvalsRagasCoherenceRequestBody

## Example Usage

```typescript
import { EvalsRagasCoherenceRequestBody } from "@orq-ai/node/models/operations";

let value: EvalsRagasCoherenceRequestBody = {
  query: "<value>",
  output: "<value>",
  model: "CTS",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `query`                                  | *string*                                 | :heavy_check_mark:                       | Latest user message                      |
| `output`                                 | *string*                                 | :heavy_check_mark:                       | The generated response from the model    |
| `model`                                  | *string*                                 | :heavy_check_mark:                       | N/A                                      |
| `reference`                              | *string*                                 | :heavy_minus_sign:                       | The reference used to compare the output |