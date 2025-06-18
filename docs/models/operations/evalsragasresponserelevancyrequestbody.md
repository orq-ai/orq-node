# EvalsRagasResponseRelevancyRequestBody

## Example Usage

```typescript
import { EvalsRagasResponseRelevancyRequestBody } from "@orq-ai/node/models/operations";

let value: EvalsRagasResponseRelevancyRequestBody = {
  query: "<value>",
  output: "<value>",
  model: "Challenger",
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `query`                               | *string*                              | :heavy_check_mark:                    | Latest user message                   |
| `output`                              | *string*                              | :heavy_check_mark:                    | The generated response from the model |
| `model`                               | *string*                              | :heavy_check_mark:                    | N/A                                   |
| `retrievals`                          | *string*[]                            | :heavy_minus_sign:                    | Knowledge base retrievals             |