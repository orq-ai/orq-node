# DeploymentGetLogsEvalsDeploymentsResponse7

## Example Usage

```typescript
import { DeploymentGetLogsEvalsDeploymentsResponse7 } from "@orq-ai/node/models/operations";

let value: DeploymentGetLogsEvalsDeploymentsResponse7 = {
  type: "llm_eval",
  workflowRun: {
    id: "<id>",
    startedAt: new Date("2023-12-21T16:20:06.057Z"),
    productType: "workflows",
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
        status: "completed",
        startedAt: "<value>",
        relatedEntities: [
          {
            type: "evaluator",
            evaluatorId: "<id>",
          },
        ],
        evaluatorType: "output_guardrail",
      },
    ],
    data: {
      action: "invoke",
      promptConfig: {
        stream: false,
        model: "Prius",
        modelDbId: "2d039194-6518-4f94-af6b-afe21ce7b132",
        modelType: "completion",
        modelParameters: {},
        provider: "openai",
        messages: [
          {
            role: "user",
            content: [
              {
                type: "image_url",
                imageUrl: {
                  url: "https://tall-dulcimer.biz/",
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
  status: "completed",
  startedAt: "<value>",
  relatedEntities: [
    {
      type: "contact",
      contactId: "<id>",
    },
  ],
  evaluatorType: "output_evaluator",
};
```

## Fields

| Field                                                                                                                                                                                                                          | Type                                                                                                                                                                                                                           | Required                                                                                                                                                                                                                       | Description                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                                                                                         | [operations.DeploymentGetLogsEvalsDeploymentsResponse200ApplicationJSONResponseBodyData47Type](../../models/operations/deploymentgetlogsevalsdeploymentsresponse200applicationjsonresponsebodydata47type.md)                   | :heavy_check_mark:                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                            |
| `workflowRun`                                                                                                                                                                                                                  | [operations.DeploymentGetLogsEvalsDeploymentsWorkflowRun](../../models/operations/deploymentgetlogsevalsdeploymentsworkflowrun.md)                                                                                             | :heavy_check_mark:                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                            |
| `id`                                                                                                                                                                                                                           | *string*                                                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                            |
| `status`                                                                                                                                                                                                                       | [operations.DeploymentGetLogsEvalsDeploymentsResponse200ApplicationJSONResponseBodyData47Status](../../models/operations/deploymentgetlogsevalsdeploymentsresponse200applicationjsonresponsebodydata47status.md)               | :heavy_check_mark:                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                            |
| `startedAt`                                                                                                                                                                                                                    | *string*                                                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                            |
| `finishedAt`                                                                                                                                                                                                                   | *string*                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                            |
| `relatedEntities`                                                                                                                                                                                                              | *operations.DeploymentGetLogsEvalsDeploymentsResponse200ApplicationJSONResponseBodyData47RelatedEntities*[]                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                            |
| `passed`                                                                                                                                                                                                                       | *boolean*                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                            |
| `evaluatorType`                                                                                                                                                                                                                | [operations.DeploymentGetLogsEvalsDeploymentsResponse200ApplicationJSONResponseBodyData47EvaluatorType](../../models/operations/deploymentgetlogsevalsdeploymentsresponse200applicationjsonresponsebodydata47evaluatortype.md) | :heavy_check_mark:                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                            |