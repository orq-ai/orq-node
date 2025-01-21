# DeploymentGetLogsEvalsDeploymentsWorkflowRun

## Example Usage

```typescript
import { DeploymentGetLogsEvalsDeploymentsWorkflowRun } from "@orq-ai/node/models/operations";

let value: DeploymentGetLogsEvalsDeploymentsWorkflowRun = {
  id: "<id>",
  startedAt: new Date("2024-09-23T09:07:23.695Z"),
  productType: "experiments",
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
      status: "failed",
      startedAt: "<value>",
      relatedEntities: [
        {
          type: "human_eval",
          humanEvalId: "<id>",
        },
      ],
      evaluatorType: "input_guardrail",
    },
  ],
  data: {
    action: "invoke",
    promptConfig: {
      stream: false,
      model: "Expedition",
      modelDbId: "5e506caf-1e57-4613-9b02-0d92cfee0949",
      modelType: "completion",
      modelParameters: {},
      provider: "aws",
      messages: [
        {
          role: "exception",
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

| Field                                                                                                                                                          | Type                                                                                                                                                           | Required                                                                                                                                                       | Description                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                           | *string*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `workflowMetadata`                                                                                                                                             | Record<string, *any*>                                                                                                                                          | :heavy_minus_sign:                                                                                                                                             | Metadata for the workflow run                                                                                                                                  |
| `workflowInput`                                                                                                                                                | Record<string, *any*>                                                                                                                                          | :heavy_minus_sign:                                                                                                                                             | Input for the workflow run                                                                                                                                     |
| `workflowOutput`                                                                                                                                               | Record<string, *any*>                                                                                                                                          | :heavy_minus_sign:                                                                                                                                             | Output for the workflow run                                                                                                                                    |
| `requestProperties`                                                                                                                                            | [operations.DeploymentGetLogsEvalsDeploymentsResponseRequestProperties](../../models/operations/deploymentgetlogsevalsdeploymentsresponserequestproperties.md) | :heavy_minus_sign:                                                                                                                                             | An optional field that is filled if the workflow was triggered by an HTTP request                                                                              |
| `startedAt`                                                                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                  | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `finishedAt`                                                                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                  | :heavy_minus_sign:                                                                                                                                             | N/A                                                                                                                                                            |
| `productType`                                                                                                                                                  | [operations.DeploymentGetLogsEvalsDeploymentsResponseProductType](../../models/operations/deploymentgetlogsevalsdeploymentsresponseproducttype.md)             | :heavy_check_mark:                                                                                                                                             | Orquesta product                                                                                                                                               |
| `relatedEntities`                                                                                                                                              | *operations.DeploymentGetLogsEvalsDeploymentsResponse200ApplicationJSONResponseBodyData47WorkflowRunRelatedEntities*[]                                         | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `evals`                                                                                                                                                        | *operations.DeploymentGetLogsEvalsDeploymentsResponseEvals*[]                                                                                                  | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `data`                                                                                                                                                         | [operations.DeploymentGetLogsEvalsDeploymentsResponseData](../../models/operations/deploymentgetlogsevalsdeploymentsresponsedata.md)                           | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |