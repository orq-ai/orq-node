# WorkflowRun

## Example Usage

```typescript
import { WorkflowRun } from "@orq-ai/node/models/operations";

let value: WorkflowRun = {
  id: "<id>",
  startedAt: new Date("2023-07-02T05:45:15.890Z"),
  productType: "deployments",
  relatedEntities: [
    {
      type: "evaluator",
      evaluatorId: "<id>",
    },
  ],
  evals: [
    {
      type: "string_array",
      values: [
        "<value>",
      ],
      id: "<id>",
      status: "pending",
      startedAt: "<value>",
      relatedEntities: [
        {
          type: "contact",
          contactId: "<id>",
        },
      ],
      evaluatorType: "input_evaluator",
    },
  ],
  data: {
    action: "invoke",
    promptConfig: {
      stream: false,
      model: "Altima",
      modelDbId: "73a6caf5-7a63-404d-890c-0f8eee6252d9",
      modelType: "rerank",
      modelParameters: {},
      provider: "aws",
      messages: [
        {
          role: "system",
          content: "<value>",
        },
      ],
    },
    variables: [
      {
        key: "<key>",
      },
    ],
    promptSnippets: [
      {
        id: "<id>",
        key: "<key>",
        value: "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                        | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `workflowMetadata`                                                                                          | Record<string, *any*>                                                                                       | :heavy_minus_sign:                                                                                          | Metadata for the workflow run                                                                               |
| `workflowInput`                                                                                             | Record<string, *any*>                                                                                       | :heavy_minus_sign:                                                                                          | Input for the workflow run                                                                                  |
| `workflowOutput`                                                                                            | Record<string, *any*>                                                                                       | :heavy_minus_sign:                                                                                          | Output for the workflow run                                                                                 |
| `requestProperties`                                                                                         | [operations.EvalsRequestProperties](../../models/operations/evalsrequestproperties.md)                      | :heavy_minus_sign:                                                                                          | An optional field that is filled if the workflow was triggered by an HTTP request                           |
| `startedAt`                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)               | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `finishedAt`                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)               | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |
| `productType`                                                                                               | [operations.EvalsProductType](../../models/operations/evalsproducttype.md)                                  | :heavy_check_mark:                                                                                          | Orquesta product                                                                                            |
| `relatedEntities`                                                                                           | *operations.DeploymentGetLogsEvalsDeploymentsResponse200ApplicationJSONResponseBodyData17RelatedEntities*[] | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `evals`                                                                                                     | *operations.EvalsEvals*[]                                                                                   | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `data`                                                                                                      | [operations.EvalsData](../../models/operations/evalsdata.md)                                                | :heavy_check_mark:                                                                                          | N/A                                                                                                         |