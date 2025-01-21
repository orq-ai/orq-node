# Data3

The schema for the deployment workflow run

## Example Usage

```typescript
import { Data3 } from "@orq-ai/node/models/operations";

let value: Data3 = {
  id: "<id>",
  workspaceId: "63065b16-5ae2-4d90-8c8c-6a3358bad6e1",
  startedAt: new Date("2025-01-19T08:30:25.562Z"),
  evals: [
    {
      type: "boolean",
      value: false,
      id: "<id>",
      status: "failed",
      startedAt: "<value>",
      relatedEntities: [
        {
          type: "account",
          accountId: "fdda3c09-7c06-4726-9e74-804ca093fc26",
        },
      ],
      evaluatorType: "input_evaluator",
    },
  ],
  productType: "playgrounds",
  relatedEntities: [
    {
      type: "playground_completion",
      playgroundCompletionId: "d024f621-ec98-4c5a-ab92-fc79c7bc7398",
    },
  ],
  data: {
    choices: [
      {
        index: 585.82,
      },
    ],
    action: "invoke",
    promptConfig: {
      stream: false,
      model: "Mustang",
      modelDbId: "86d34a64-47cc-4ce0-8f63-fde8b88fb962",
      modelType: "embedding",
      modelParameters: {},
      provider: "fal",
      messages: [
        {
          role: "assistant",
          content: "<value>",
        },
      ],
    },
    variables: [
      {
        key: "<key>",
      },
    ],
    billing: {
      billable: false,
    },
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

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                   | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The unique identifier for the workflow run                                                                             |
| `workspaceId`                                                                                                          | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The unique identifier for the workspace                                                                                |
| `workflowMetadata`                                                                                                     | Record<string, *any*>                                                                                                  | :heavy_minus_sign:                                                                                                     | Metadata for the workflow run                                                                                          |
| `workflowInput`                                                                                                        | Record<string, *any*>                                                                                                  | :heavy_minus_sign:                                                                                                     | Input for the workflow run                                                                                             |
| `workflowOutput`                                                                                                       | Record<string, *any*>                                                                                                  | :heavy_minus_sign:                                                                                                     | Output for the workflow run                                                                                            |
| `projectId`                                                                                                            | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | The optional project_id for the entity of the event                                                                    |
| `requestProperties`                                                                                                    | [operations.DeploymentGetLogsDataRequestProperties](../../models/operations/deploymentgetlogsdatarequestproperties.md) | :heavy_minus_sign:                                                                                                     | An optional field that is filled if the workflow was triggered by an HTTP request                                      |
| `startedAt`                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                          | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `finishedAt`                                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                          | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `evals`                                                                                                                | *operations.DeploymentGetLogsDataEvals*[]                                                                              | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `productType`                                                                                                          | [operations.DeploymentGetLogsDataProductType](../../models/operations/deploymentgetlogsdataproducttype.md)             | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `relatedEntities`                                                                                                      | *operations.DeploymentGetLogsDataRelatedEntities*[]                                                                    | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `data`                                                                                                                 | [operations.DeploymentGetLogsDataDeploymentsData](../../models/operations/deploymentgetlogsdatadeploymentsdata.md)     | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |