# EvaluatorResponseRagas

## Example Usage

```typescript
import { EvaluatorResponseRagas } from "@orq-ai/node/models/components";

let value: EvaluatorResponseRagas = {
  id: "<id>",
  description: "rewarding ack as geez rot outrun an hmph",
  type: "ragas",
  outputType: "string",
  ragasMetric: "noise_sensitivity",
  key: "<key>",
  model: "XC90",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                       | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `description`                                                                                              | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `created`                                                                                                  | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `updated`                                                                                                  | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `updatedById`                                                                                              | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `projectId`                                                                                                | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | Unique identifier of the project owning this evaluator.                                                    |
| `guardrailConfig`                                                                                          | *any*                                                                                                      | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `type`                                                                                                     | *"ragas"*                                                                                                  | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `outputType`                                                                                               | [components.EvaluatorResponseRagasOutputType](../../models/components/evaluatorresponseragasoutputtype.md) | :heavy_check_mark:                                                                                         | The type of output expected from the evaluator                                                             |
| `ragasMetric`                                                                                              | [components.RagasMetric](../../models/components/ragasmetric.md)                                           | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `key`                                                                                                      | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `model`                                                                                                    | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |