# DeploymentGetLogsEvals7

## Example Usage

```typescript
import { DeploymentGetLogsEvals7 } from "@orq-ai/node/models/operations";

let value: DeploymentGetLogsEvals7 = {
  type: "llm_eval",
  workflowRun: {
    id: "<id>",
    startedAt: new Date("2024-04-15T04:46:35.940Z"),
    productType: "knowledge",
    relatedEntities: [
      {
        type: "evaluator",
        evaluatorId: "<id>",
      },
    ],
    evals: [
      {
        type: "number",
        value: 7080.07,
        id: "<id>",
        status: "completed",
        startedAt: "<value>",
        relatedEntities: [
          {
            type: "contact",
            contactId: "<id>",
          },
        ],
        evaluatorType: "input_guardrail",
      },
    ],
    data: {
      action: "invoke",
      promptConfig: {
        stream: false,
        model: "Impala",
        modelDbId: "eabf135f-3914-44b1-8c4b-56218a12023b",
        modelType: "stt",
        modelParameters: {},
        provider: "azure",
        messages: [
          {
            role: "assistant",
            content: [
              {
                type: "image_url",
                imageUrl: {
                  url: "https://babyish-exterior.name/",
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
  evaluatorType: "output_evaluator",
};
```

## Fields

| Field                                                                                                                                                                                                                          | Type                                                                                                                                                                                                                           | Required                                                                                                                                                                                                                       | Description                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                                                                                         | [operations.DeploymentGetLogsEvalsDeploymentsResponse200ApplicationJSONResponseBodyData27Type](../../models/operations/deploymentgetlogsevalsdeploymentsresponse200applicationjsonresponsebodydata27type.md)                   | :heavy_check_mark:                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                            |
| `workflowRun`                                                                                                                                                                                                                  | [operations.EvalsWorkflowRun](../../models/operations/evalsworkflowrun.md)                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                            |
| `id`                                                                                                                                                                                                                           | *string*                                                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                            |
| `status`                                                                                                                                                                                                                       | [operations.DeploymentGetLogsEvalsDeploymentsResponse200ApplicationJSONResponseBodyData27Status](../../models/operations/deploymentgetlogsevalsdeploymentsresponse200applicationjsonresponsebodydata27status.md)               | :heavy_check_mark:                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                            |
| `startedAt`                                                                                                                                                                                                                    | *string*                                                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                            |
| `finishedAt`                                                                                                                                                                                                                   | *string*                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                            |
| `relatedEntities`                                                                                                                                                                                                              | *operations.DeploymentGetLogsEvalsDeploymentsResponse200ApplicationJSONResponseBodyData27RelatedEntities*[]                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                            |
| `passed`                                                                                                                                                                                                                       | *boolean*                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                            |
| `evaluatorType`                                                                                                                                                                                                                | [operations.DeploymentGetLogsEvalsDeploymentsResponse200ApplicationJSONResponseBodyData27EvaluatorType](../../models/operations/deploymentgetlogsevalsdeploymentsresponse200applicationjsonresponsebodydata27evaluatortype.md) | :heavy_check_mark:                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                            |