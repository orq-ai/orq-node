# EvalsRagasHarmfulnessRequestBody

## Example Usage

```typescript
import { EvalsRagasHarmfulnessRequestBody } from "@orq-ai/node/models/operations";

let value: EvalsRagasHarmfulnessRequestBody = {
  query: "<value>",
  output: "<value>",
  model: "Explorer",
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `query`                               | *string*                              | :heavy_check_mark:                    | Latest user message                   |
| `output`                              | *string*                              | :heavy_check_mark:                    | The generated response from the model |
| `model`                               | *string*                              | :heavy_check_mark:                    | N/A                                   |