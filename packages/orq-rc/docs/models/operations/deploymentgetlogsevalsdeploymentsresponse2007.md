# DeploymentGetLogsEvalsDeploymentsResponse2007

## Example Usage

```typescript
import { DeploymentGetLogsEvalsDeploymentsResponse2007 } from "@orq-ai/node/models/operations";

let value: DeploymentGetLogsEvalsDeploymentsResponse2007 = {
  type: "llm_eval",
  workflowRun: {
    id: "<id>",
    startedAt: new Date("2025-04-20T20:41:36.879Z"),
    productType: "experiments",
    relatedEntities: [
      {
        type: "evaluator",
        evaluatorId: "<id>",
      },
    ],
    evals: [
      {
        type: "boolean",
        value: "<value>",
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
    data: {
      action: "invoke",
      promptConfig: {
        stream: false,
        model: "PT Cruiser",
        modelDbId: "a9cf02c1-834b-40d7-b88a-515285ff99fe",
        modelType: "embedding",
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
  evaluatorType: "input_evaluator",
};
```

## Fields

| Field                                                                                                                                                                                                                          | Type                                                                                                                                                                                                                           | Required                                                                                                                                                                                                                       | Description                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                                                                                         | [operations.DeploymentGetLogsEvalsDeploymentsResponse200ApplicationJSONResponseBodyData57Type](../../models/operations/deploymentgetlogsevalsdeploymentsresponse200applicationjsonresponsebodydata57type.md)                   | :heavy_check_mark:                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                            |
| `workflowRun`                                                                                                                                                                                                                  | [operations.DeploymentGetLogsEvalsDeploymentsResponseWorkflowRun](../../models/operations/deploymentgetlogsevalsdeploymentsresponseworkflowrun.md)                                                                             | :heavy_check_mark:                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                            |
| `id`                                                                                                                                                                                                                           | *string*                                                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                            |
| `status`                                                                                                                                                                                                                       | [operations.DeploymentGetLogsEvalsDeploymentsResponse200ApplicationJSONResponseBodyData57Status](../../models/operations/deploymentgetlogsevalsdeploymentsresponse200applicationjsonresponsebodydata57status.md)               | :heavy_check_mark:                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                            |
| `startedAt`                                                                                                                                                                                                                    | *string*                                                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                            |
| `finishedAt`                                                                                                                                                                                                                   | *string*                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                            |
| `relatedEntities`                                                                                                                                                                                                              | *operations.DeploymentGetLogsEvalsDeploymentsResponse200ApplicationJSONResponseBodyData57RelatedEntities*[]                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                            |
| `passed`                                                                                                                                                                                                                       | *boolean*                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                            |
| `evaluatorType`                                                                                                                                                                                                                | [operations.DeploymentGetLogsEvalsDeploymentsResponse200ApplicationJSONResponseBodyData57EvaluatorType](../../models/operations/deploymentgetlogsevalsdeploymentsresponse200applicationjsonresponsebodydata57evaluatortype.md) | :heavy_check_mark:                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                            |