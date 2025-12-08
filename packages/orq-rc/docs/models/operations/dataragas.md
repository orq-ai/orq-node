# DataRagas

## Example Usage

```typescript
import { DataRagas } from "@orq-ai/node/models/operations";

let value: DataRagas = {
  id: "<id>",
  description: "hurtful deny doodle for",
  type: "ragas",
  ragasMetric: "context_entities_recall",
  key: "<key>",
  model: "El Camino",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `description`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `created`                                                                | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `updated`                                                                | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `guardrailConfig`                                                        | *operations.GetEvalsDataEvalsResponse200GuardrailConfig*                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `type`                                                                   | *"ragas"*                                                                | :heavy_check_mark:                                                       | N/A                                                                      |
| `ragasMetric`                                                            | [operations.DataRagasMetric](../../models/operations/dataragasmetric.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `key`                                                                    | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `model`                                                                  | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |