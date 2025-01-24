# EvalsWorkflowRun

## Example Usage

```typescript
import { EvalsWorkflowRun } from "@orq-ai/node/models/operations";

let value: EvalsWorkflowRun = {
  id: "<id>",
  startedAt: new Date("2023-02-03T14:02:44.437Z"),
  productType: "remoteconfigs",
  relatedEntities: [
    {
      type: "evaluator",
      evaluatorId: "<id>",
    },
  ],
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
          accountId: "3d0c1dc3-6763-43b2-9413-0b6674593792",
        },
      ],
      evaluatorType: "input_guardrail",
    },
  ],
  data: {
    action: "invoke",
    promptConfig: {
      stream: false,
      model: "Element",
      modelDbId: "b37d2e77-a8d2-424f-a18c-dff838b74dd8",
      modelType: "image",
      modelParameters: {},
      provider: "nvidia",
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
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                     | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `workflowMetadata`                                                                                                       | Record<string, *any*>                                                                                                    | :heavy_minus_sign:                                                                                                       | Metadata for the workflow run                                                                                            |
| `workflowInput`                                                                                                          | Record<string, *any*>                                                                                                    | :heavy_minus_sign:                                                                                                       | Input for the workflow run                                                                                               |
| `workflowOutput`                                                                                                         | Record<string, *any*>                                                                                                    | :heavy_minus_sign:                                                                                                       | Output for the workflow run                                                                                              |
| `requestProperties`                                                                                                      | [operations.DeploymentGetLogsEvalsRequestProperties](../../models/operations/deploymentgetlogsevalsrequestproperties.md) | :heavy_minus_sign:                                                                                                       | An optional field that is filled if the workflow was triggered by an HTTP request                                        |
| `startedAt`                                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                            | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `finishedAt`                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                            | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `productType`                                                                                                            | [operations.DeploymentGetLogsEvalsProductType](../../models/operations/deploymentgetlogsevalsproducttype.md)             | :heavy_check_mark:                                                                                                       | Orquesta product                                                                                                         |
| `relatedEntities`                                                                                                        | *operations.DeploymentGetLogsEvalsDeploymentsResponse200ApplicationJSONResponseBodyData27WorkflowRunRelatedEntities*[]   | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `evals`                                                                                                                  | *operations.DeploymentGetLogsEvalsEvals*[]                                                                               | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `data`                                                                                                                   | [operations.DeploymentGetLogsEvalsData](../../models/operations/deploymentgetlogsevalsdata.md)                           | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |