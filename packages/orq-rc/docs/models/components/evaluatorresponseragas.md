# EvaluatorResponseRagas

## Example Usage

```typescript
import { EvaluatorResponseRagas } from "@orq-ai/node/models/components";

let value: EvaluatorResponseRagas = {
  id: "<id>",
  description: "rewarding ack as geez rot outrun an hmph",
  type: "ragas",
  ragasMetric: "faithfulness",
  key: "<key>",
  model: "XTS",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `id`                                                             | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `description`                                                    | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `created`                                                        | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `updated`                                                        | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `updatedById`                                                    | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `guardrailConfig`                                                | *components.EvaluatorResponseRagasGuardrailConfig*               | :heavy_minus_sign:                                               | N/A                                                              |
| `type`                                                           | *"ragas"*                                                        | :heavy_check_mark:                                               | N/A                                                              |
| `ragasMetric`                                                    | [components.RagasMetric](../../models/components/ragasmetric.md) | :heavy_check_mark:                                               | N/A                                                              |
| `key`                                                            | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `model`                                                          | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |