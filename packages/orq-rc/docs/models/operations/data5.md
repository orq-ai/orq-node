# Data5

The schema for the router workflow run

## Example Usage

```typescript
import { Data5 } from "@orq-ai/node/models/operations";

let value: Data5 = {
  id: "<id>",
  workspaceId: "9b4fde09-4da8-418a-9f9f-fa87e011c5a9",
  startedAt: new Date("2024-08-05T14:21:26.517Z"),
  evals: [
    {
      type: "bert_score",
      value: {
        f1: 9409.51,
        precision: 5756.34,
        recall: 6143.68,
      },
      id: "<id>",
      status: "pending",
      startedAt: "<value>",
      relatedEntities: [
        {
          type: "evaluator",
          evaluatorId: "<id>",
        },
      ],
      evaluatorType: "input_guardrail",
    },
  ],
  productType: "router",
  relatedEntities: [
    "<value>",
  ],
  data: {
    promptConfig: {
      stream: false,
      model: "Prius",
      modelDbId: "0644c970-ff30-48fe-9945-e723417ea104",
      modelType: "stt",
      modelParameters: {},
      provider: "elevenlabs",
      messages: [
        {
          role: "exception",
          content: [
            {
              type: "image_url",
              imageUrl: {
                url: "https://prime-bidet.biz",
              },
            },
          ],
        },
      ],
    },
    action: "invoke",
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

| Field                                                                                                                                                        | Type                                                                                                                                                         | Required                                                                                                                                                     | Description                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                         | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | The unique identifier for the workflow run                                                                                                                   |
| `workspaceId`                                                                                                                                                | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | The unique identifier for the workspace                                                                                                                      |
| `workflowMetadata`                                                                                                                                           | Record<string, *any*>                                                                                                                                        | :heavy_minus_sign:                                                                                                                                           | Metadata for the workflow run                                                                                                                                |
| `workflowInput`                                                                                                                                              | Record<string, *any*>                                                                                                                                        | :heavy_minus_sign:                                                                                                                                           | Input for the workflow run                                                                                                                                   |
| `workflowOutput`                                                                                                                                             | Record<string, *any*>                                                                                                                                        | :heavy_minus_sign:                                                                                                                                           | Output for the workflow run                                                                                                                                  |
| `projectId`                                                                                                                                                  | *string*                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                           | The optional project_id for the entity of the event                                                                                                          |
| `requestProperties`                                                                                                                                          | [operations.DeploymentGetLogsDataDeploymentsResponseRequestProperties](../../models/operations/deploymentgetlogsdatadeploymentsresponserequestproperties.md) | :heavy_minus_sign:                                                                                                                                           | An optional field that is filled if the workflow was triggered by an HTTP request                                                                            |
| `startedAt`                                                                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `finishedAt`                                                                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                | :heavy_minus_sign:                                                                                                                                           | N/A                                                                                                                                                          |
| `evals`                                                                                                                                                      | *operations.DeploymentGetLogsDataDeploymentsResponseEvals*[]                                                                                                 | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `productType`                                                                                                                                                | [operations.DeploymentGetLogsDataDeploymentsResponseProductType](../../models/operations/deploymentgetlogsdatadeploymentsresponseproducttype.md)             | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `relatedEntities`                                                                                                                                            | *any*[]                                                                                                                                                      | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `data`                                                                                                                                                       | [operations.DeploymentGetLogsDataDeploymentsResponse200Data](../../models/operations/deploymentgetlogsdatadeploymentsresponse200data.md)                     | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |