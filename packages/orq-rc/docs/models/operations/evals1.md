# Evals1

## Example Usage

```typescript
import { Evals1 } from "@orq-ai/node/models/operations";

let value: Evals1 = {
  type: "string",
  id: "<id>",
  status: "failed",
  startedAt: "<value>",
  relatedEntities: [
    {
      type: "contact",
      contactId: "<id>",
    },
  ],
  evaluatorType: "input_guardrail",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                     | [operations.EvalsType](../../models/operations/evalstype.md)                                               | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `value`                                                                                                    | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `id`                                                                                                       | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `status`                                                                                                   | [operations.Status](../../models/operations/status.md)                                                     | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `startedAt`                                                                                                | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `finishedAt`                                                                                               | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `relatedEntities`                                                                                          | *operations.DeploymentGetLogsEvalsDeploymentsResponse200ApplicationJSONResponseBodyData1RelatedEntities*[] | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `passed`                                                                                                   | *boolean*                                                                                                  | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `evaluatorType`                                                                                            | [operations.EvalsEvaluatorType](../../models/operations/evalsevaluatortype.md)                             | :heavy_check_mark:                                                                                         | N/A                                                                                                        |