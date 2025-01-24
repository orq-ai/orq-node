# DeploymentGetLogsEvalsDeployments7

## Example Usage

```typescript
import { DeploymentGetLogsEvalsDeployments7 } from "@orq-ai/node/models/operations";

let value: DeploymentGetLogsEvalsDeployments7 = {
  type: "llm_eval",
  workflowRun: {
    id: "<id>",
    startedAt: new Date("2024-08-09T23:06:38.424Z"),
    productType: "remoteconfigs",
    relatedEntities: [
      {
        type: "evaluator",
        evaluatorId: "<id>",
      },
    ],
    evals: [
      {
        type: "string",
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
        model: "2",
        modelDbId: "5bbcb973-9a19-4182-b11e-94182c7b6ba8",
        modelType: "tts",
        modelParameters: {},
        provider: "perplexity",
        messages: [
          {
            role: "user",
            content: [
              {
                type: "image_url",
                imageUrl: {
                  url: "https://nautical-cheese.biz/",
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
  },
  id: "<id>",
  status: "pending",
  startedAt: "<value>",
  relatedEntities: [
    {
      type: "human_eval",
      humanEvalId: "<id>",
    },
  ],
  evaluatorType: "input_guardrail",
};
```

## Fields

| Field                                                                                                                                                                                                                          | Type                                                                                                                                                                                                                           | Required                                                                                                                                                                                                                       | Description                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                                                                                         | [operations.DeploymentGetLogsEvalsDeploymentsResponse200ApplicationJSONResponseBodyData37Type](../../models/operations/deploymentgetlogsevalsdeploymentsresponse200applicationjsonresponsebodydata37type.md)                   | :heavy_check_mark:                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                            |
| `workflowRun`                                                                                                                                                                                                                  | [operations.DeploymentGetLogsEvalsWorkflowRun](../../models/operations/deploymentgetlogsevalsworkflowrun.md)                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                            |
| `id`                                                                                                                                                                                                                           | *string*                                                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                            |
| `status`                                                                                                                                                                                                                       | [operations.DeploymentGetLogsEvalsDeploymentsResponse200ApplicationJSONResponseBodyData37Status](../../models/operations/deploymentgetlogsevalsdeploymentsresponse200applicationjsonresponsebodydata37status.md)               | :heavy_check_mark:                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                            |
| `startedAt`                                                                                                                                                                                                                    | *string*                                                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                            |
| `finishedAt`                                                                                                                                                                                                                   | *string*                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                            |
| `relatedEntities`                                                                                                                                                                                                              | *operations.DeploymentGetLogsEvalsDeploymentsResponse200ApplicationJSONResponseBodyData37RelatedEntities*[]                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                            |
| `passed`                                                                                                                                                                                                                       | *boolean*                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                            |
| `evaluatorType`                                                                                                                                                                                                                | [operations.DeploymentGetLogsEvalsDeploymentsResponse200ApplicationJSONResponseBodyData37EvaluatorType](../../models/operations/deploymentgetlogsevalsdeploymentsresponse200applicationjsonresponsebodydata37evaluatortype.md) | :heavy_check_mark:                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                            |