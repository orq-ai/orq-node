# Data4

The schema for the experiment workflow run

## Example Usage

```typescript
import { Data4 } from "@orq-ai/node/models/operations";

let value: Data4 = {
  id: "<id>",
  workspaceId: "833b63d6-1b49-49f3-a4eb-7b66284a6dc2",
  startedAt: new Date("2025-02-21T06:13:59.813Z"),
  evals: [
    {
      type: "rouge_n",
      value: {
        rouge1: {
          f1: 1139.47,
          precision: 5032.47,
          recall: 4328.99,
        },
        rouge2: {
          f1: 3257.54,
          precision: 5825.36,
          recall: 3248.72,
        },
        rougeL: {
          f1: 2355.56,
          precision: 7359.02,
          recall: 2133.71,
        },
      },
      id: "<id>",
      status: "failed",
      startedAt: "<value>",
      relatedEntities: [
        {
          type: "evaluator",
          evaluatorId: "<id>",
        },
      ],
      evaluatorType: "output_evaluator",
    },
  ],
  productType: "experiments",
  relatedEntities: [
    {
      type: "account",
      accountId: "2cf842e5-766c-4eaf-b39a-bc5e24794e71",
    },
  ],
  data: {
    promptConfig: {
      stream: false,
      model: "Wrangler",
      modelDbId: "589c2db0-9079-4ae4-8d7a-cbcacee5f097",
      modelType: "image",
      modelParameters: {},
      provider: "openai",
      messages: [
        {
          role: "tool",
          content: [
            {
              type: "text",
              text: "<value>",
            },
          ],
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

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                         | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | The unique identifier for the workflow run                                                                                                   |
| `workspaceId`                                                                                                                                | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | The unique identifier for the workspace                                                                                                      |
| `workflowMetadata`                                                                                                                           | Record<string, *any*>                                                                                                                        | :heavy_minus_sign:                                                                                                                           | Metadata for the workflow run                                                                                                                |
| `workflowInput`                                                                                                                              | Record<string, *any*>                                                                                                                        | :heavy_minus_sign:                                                                                                                           | Input for the workflow run                                                                                                                   |
| `workflowOutput`                                                                                                                             | Record<string, *any*>                                                                                                                        | :heavy_minus_sign:                                                                                                                           | Output for the workflow run                                                                                                                  |
| `projectId`                                                                                                                                  | *string*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | The optional project_id for the entity of the event                                                                                          |
| `requestProperties`                                                                                                                          | [operations.DeploymentGetLogsDataDeploymentsRequestProperties](../../models/operations/deploymentgetlogsdatadeploymentsrequestproperties.md) | :heavy_minus_sign:                                                                                                                           | An optional field that is filled if the workflow was triggered by an HTTP request                                                            |
| `startedAt`                                                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `finishedAt`                                                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |
| `evals`                                                                                                                                      | *operations.DeploymentGetLogsDataDeploymentsEvals*[]                                                                                         | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `productType`                                                                                                                                | [operations.DeploymentGetLogsDataDeploymentsProductType](../../models/operations/deploymentgetlogsdatadeploymentsproducttype.md)             | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `relatedEntities`                                                                                                                            | *operations.DeploymentGetLogsDataDeploymentsRelatedEntities*[]                                                                               | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `data`                                                                                                                                       | [operations.DeploymentGetLogsDataDeploymentsResponseData](../../models/operations/deploymentgetlogsdatadeploymentsresponsedata.md)           | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |