# Evals7

## Example Usage

```typescript
import { Evals7 } from "@orq-ai/node/models/operations";

let value: Evals7 = {
  type: "llm_eval",
  workflowRun: {
    id: "<id>",
    startedAt: new Date("2023-05-27T00:07:13.026Z"),
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
        value: 9189.44,
        id: "<id>",
        status: "pending",
        startedAt: "<value>",
        relatedEntities: [
          {
            type: "human_eval",
            humanEvalId: "<id>",
          },
        ],
        evaluatorType: "output_guardrail",
      },
    ],
    data: {
      action: "invoke",
      promptConfig: {
        stream: false,
        model: "Focus",
        modelDbId: "890e30a8-2f64-4182-92b1-b161f3538e7b",
        modelType: "embedding",
        modelParameters: {},
        provider: "openai",
        messages: [
          {
            role: "expected_output",
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
      type: "human_eval",
      humanEvalId: "<id>",
    },
  ],
  evaluatorType: "input_guardrail",
};
```

## Fields

| Field                                                                                                                                                                                                              | Type                                                                                                                                                                                                               | Required                                                                                                                                                                                                           | Description                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                                                                             | [operations.DeploymentGetLogsEvalsDeploymentsResponse200ApplicationJSONResponseBodyType](../../models/operations/deploymentgetlogsevalsdeploymentsresponse200applicationjsonresponsebodytype.md)                   | :heavy_check_mark:                                                                                                                                                                                                 | N/A                                                                                                                                                                                                                |
| `workflowRun`                                                                                                                                                                                                      | [operations.WorkflowRun](../../models/operations/workflowrun.md)                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                                 | N/A                                                                                                                                                                                                                |
| `id`                                                                                                                                                                                                               | *string*                                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                                 | N/A                                                                                                                                                                                                                |
| `status`                                                                                                                                                                                                           | [operations.DeploymentGetLogsEvalsDeploymentsResponse200ApplicationJSONStatus](../../models/operations/deploymentgetlogsevalsdeploymentsresponse200applicationjsonstatus.md)                                       | :heavy_check_mark:                                                                                                                                                                                                 | N/A                                                                                                                                                                                                                |
| `startedAt`                                                                                                                                                                                                        | *string*                                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                                 | N/A                                                                                                                                                                                                                |
| `finishedAt`                                                                                                                                                                                                       | *string*                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                 | N/A                                                                                                                                                                                                                |
| `relatedEntities`                                                                                                                                                                                                  | *operations.DeploymentGetLogsEvalsDeploymentsResponse200ApplicationJSONRelatedEntities*[]                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                                 | N/A                                                                                                                                                                                                                |
| `passed`                                                                                                                                                                                                           | *boolean*                                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                 | N/A                                                                                                                                                                                                                |
| `evaluatorType`                                                                                                                                                                                                    | [operations.DeploymentGetLogsEvalsDeploymentsResponse200ApplicationJSONResponseBodyEvaluatorType](../../models/operations/deploymentgetlogsevalsdeploymentsresponse200applicationjsonresponsebodyevaluatortype.md) | :heavy_check_mark:                                                                                                                                                                                                 | N/A                                                                                                                                                                                                                |