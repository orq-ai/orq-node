# Ragas

## Example Usage

```typescript
import { Ragas } from "@orq-ai/node/models/operations";

let value: Ragas = {
  id: "<id>",
  description: "truthfully deselect until",
  type: "ragas",
  ragasMetric: "context_entities_recall",
  key: "<key>",
  model: "Model S",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `id`                                                                              | *string*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `description`                                                                     | *string*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `created`                                                                         | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |
| `updated`                                                                         | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |
| `guardrailConfig`                                                                 | *operations.CreateEvalResponseBodyEvalsResponse200ApplicationJSONGuardrailConfig* | :heavy_minus_sign:                                                                | N/A                                                                               |
| `type`                                                                            | *"ragas"*                                                                         | :heavy_check_mark:                                                                | N/A                                                                               |
| `ragasMetric`                                                                     | [operations.RagasMetric](../../models/operations/ragasmetric.md)                  | :heavy_check_mark:                                                                | N/A                                                                               |
| `key`                                                                             | *string*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `model`                                                                           | *string*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |