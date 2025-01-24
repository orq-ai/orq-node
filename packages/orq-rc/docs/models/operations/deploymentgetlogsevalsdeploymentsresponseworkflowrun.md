# DeploymentGetLogsEvalsDeploymentsResponseWorkflowRun

## Example Usage

```typescript
import { DeploymentGetLogsEvalsDeploymentsResponseWorkflowRun } from "@orq-ai/node/models/operations";

let value: DeploymentGetLogsEvalsDeploymentsResponseWorkflowRun = {
  id: "<id>",
  startedAt: new Date("2023-06-12T14:57:34.476Z"),
  productType: "router",
  relatedEntities: [
    {
      type: "evaluator",
      evaluatorId: "<id>",
    },
  ],
  evals: [
    {
      type: "boolean",
      value: 9822.48,
      id: "<id>",
      status: "failed",
      startedAt: "<value>",
      relatedEntities: [
        {
          type: "account",
          accountId: "f37c3921-1506-4a61-a142-f2c998f5c86f",
        },
      ],
      evaluatorType: "input_evaluator",
    },
  ],
  data: {
    action: "invoke",
    promptConfig: {
      stream: false,
      model: "Escalade",
      modelDbId: "cbe4c79f-fd5e-4a60-9c8c-bc4c87a014f2",
      modelType: "chat",
      modelParameters: {},
      provider: "google",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "image_url",
              imageUrl: {
                url: "https://alive-sonata.name/",
              },
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

| Field                                                                                                                                                                | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                 | *string*                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `workflowMetadata`                                                                                                                                                   | Record<string, *any*>                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                   | Metadata for the workflow run                                                                                                                                        |
| `workflowInput`                                                                                                                                                      | Record<string, *any*>                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                   | Input for the workflow run                                                                                                                                           |
| `workflowOutput`                                                                                                                                                     | Record<string, *any*>                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                   | Output for the workflow run                                                                                                                                          |
| `requestProperties`                                                                                                                                                  | [operations.DeploymentGetLogsEvalsDeploymentsResponse200RequestProperties](../../models/operations/deploymentgetlogsevalsdeploymentsresponse200requestproperties.md) | :heavy_minus_sign:                                                                                                                                                   | An optional field that is filled if the workflow was triggered by an HTTP request                                                                                    |
| `startedAt`                                                                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                        | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `finishedAt`                                                                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                        | :heavy_minus_sign:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `productType`                                                                                                                                                        | [operations.DeploymentGetLogsEvalsDeploymentsResponse200ProductType](../../models/operations/deploymentgetlogsevalsdeploymentsresponse200producttype.md)             | :heavy_check_mark:                                                                                                                                                   | Orquesta product                                                                                                                                                     |
| `relatedEntities`                                                                                                                                                    | *operations.DeploymentGetLogsEvalsDeploymentsResponse200ApplicationJSONResponseBodyData57WorkflowRunRelatedEntities*[]                                               | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `evals`                                                                                                                                                              | *operations.DeploymentGetLogsEvalsDeploymentsResponse200Evals*[]                                                                                                     | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `data`                                                                                                                                                               | [operations.DeploymentGetLogsEvalsDeploymentsResponse200Data](../../models/operations/deploymentgetlogsevalsdeploymentsresponse200data.md)                           | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |