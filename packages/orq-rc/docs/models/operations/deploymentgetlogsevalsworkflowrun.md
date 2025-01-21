# DeploymentGetLogsEvalsWorkflowRun

## Example Usage

```typescript
import { DeploymentGetLogsEvalsWorkflowRun } from "@orq-ai/node/models/operations";

let value: DeploymentGetLogsEvalsWorkflowRun = {
  id: "<id>",
  startedAt: new Date("2023-09-12T01:27:22.798Z"),
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
          type: "human_eval",
          humanEvalId: "<id>",
        },
      ],
      evaluatorType: "input_evaluator",
    },
  ],
  data: {
    action: "invoke",
    promptConfig: {
      stream: false,
      model: "Silverado",
      modelDbId: "3b2fa6f8-62b9-4333-8704-b9db0975fa48",
      modelType: "stt",
      modelParameters: {},
      provider: "google-ai",
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

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                           | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `workflowMetadata`                                                                                                                             | Record<string, *any*>                                                                                                                          | :heavy_minus_sign:                                                                                                                             | Metadata for the workflow run                                                                                                                  |
| `workflowInput`                                                                                                                                | Record<string, *any*>                                                                                                                          | :heavy_minus_sign:                                                                                                                             | Input for the workflow run                                                                                                                     |
| `workflowOutput`                                                                                                                               | Record<string, *any*>                                                                                                                          | :heavy_minus_sign:                                                                                                                             | Output for the workflow run                                                                                                                    |
| `requestProperties`                                                                                                                            | [operations.DeploymentGetLogsEvalsDeploymentsRequestProperties](../../models/operations/deploymentgetlogsevalsdeploymentsrequestproperties.md) | :heavy_minus_sign:                                                                                                                             | An optional field that is filled if the workflow was triggered by an HTTP request                                                              |
| `startedAt`                                                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                  | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `finishedAt`                                                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                  | :heavy_minus_sign:                                                                                                                             | N/A                                                                                                                                            |
| `productType`                                                                                                                                  | [operations.DeploymentGetLogsEvalsDeploymentsProductType](../../models/operations/deploymentgetlogsevalsdeploymentsproducttype.md)             | :heavy_check_mark:                                                                                                                             | Orquesta product                                                                                                                               |
| `relatedEntities`                                                                                                                              | *operations.DeploymentGetLogsEvalsDeploymentsResponse200ApplicationJSONResponseBodyData37WorkflowRunRelatedEntities*[]                         | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `evals`                                                                                                                                        | *operations.DeploymentGetLogsEvalsDeploymentsEvals*[]                                                                                          | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `data`                                                                                                                                         | [operations.DeploymentGetLogsEvalsDeploymentsData](../../models/operations/deploymentgetlogsevalsdeploymentsdata.md)                           | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |