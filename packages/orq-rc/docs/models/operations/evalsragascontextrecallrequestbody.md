# EvalsRagasContextRecallRequestBody

## Example Usage

```typescript
import { EvalsRagasContextRecallRequestBody } from "@orq-ai/node/models/operations";

let value: EvalsRagasContextRecallRequestBody = {
  model: "Countach",
  reference: "<value>",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `query`                                                    | *string*                                                   | :heavy_minus_sign:                                         | Latest user message                                        |
| `output`                                                   | *string*                                                   | :heavy_minus_sign:                                         | The generated response from the model                      |
| `model`                                                    | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `reference`                                                | *string*                                                   | :heavy_check_mark:                                         | The ground truth answer to evaluate context recall against |
| `retrievals`                                               | *string*[]                                                 | :heavy_minus_sign:                                         | Knowledge base retrievals                                  |