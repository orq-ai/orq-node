# EvalsRagasSummarizationRequestBody

## Example Usage

```typescript
import { EvalsRagasSummarizationRequestBody } from "@orq-ai/node/models/operations";

let value: EvalsRagasSummarizationRequestBody = {
  output: "<value>",
  model: "Fiesta",
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `output`                              | *string*                              | :heavy_check_mark:                    | The generated response from the model |
| `model`                               | *string*                              | :heavy_check_mark:                    | N/A                                   |
| `retrievals`                          | *string*[]                            | :heavy_minus_sign:                    | Knowledge base retrievals             |