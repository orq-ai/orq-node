# Data2

The schema for the deployment workflow run

## Example Usage

```typescript
import { Data2 } from "@orq-ai/node/models/operations";

let value: Data2 = {
  id: "<id>",
  workspaceId: "f18e1390-e103-49f7-8878-4bb8da7d91cd",
  startedAt: new Date("2025-04-24T09:01:08.745Z"),
  evals: [
    {
      type: "http_eval",
      id: "<id>",
      status: "failed",
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
  productType: "deployments",
  relatedEntities: [
    {
      type: "deployment_variant",
      deploymentVariantId: "a8a6267a-4a3c-4b19-b1f5-081abde45f66",
    },
  ],
  data: {
    deploymentId: "<id>",
    deploymentKey: "<value>",
    deploymentVariantVersion: "<value>",
    deploymentVariantPosition: 1873.02,
    deploymentVariantId: "77b6dae4-c1cd-46bf-a290-5289ffe9e538",
    isDefaultMatched: false,
    action: "simulate",
    promptConfig: {
      stream: false,
      model: "1",
      modelDbId: "d9fb5a5e-0883-464a-bcc6-3489cb2b1eb1",
      modelType: "stt",
      modelParameters: {},
      provider: "fal",
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
    retries: [
      {
        retryAttempt: 5675.1,
        status: 7897.91,
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

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The unique identifier for the workflow run                                                    |
| `workspaceId`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The unique identifier for the workspace                                                       |
| `workflowMetadata`                                                                            | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | Metadata for the workflow run                                                                 |
| `workflowInput`                                                                               | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | Input for the workflow run                                                                    |
| `workflowOutput`                                                                              | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | Output for the workflow run                                                                   |
| `projectId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | The optional project_id for the entity of the event                                           |
| `requestProperties`                                                                           | [operations.DataRequestProperties](../../models/operations/datarequestproperties.md)          | :heavy_minus_sign:                                                                            | An optional field that is filled if the workflow was triggered by an HTTP request             |
| `startedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `finishedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `evals`                                                                                       | *operations.DataEvals*[]                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `productType`                                                                                 | [operations.DataProductType](../../models/operations/dataproducttype.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `relatedEntities`                                                                             | *operations.DataRelatedEntities*[]                                                            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `data`                                                                                        | [operations.DeploymentGetLogsDataData](../../models/operations/deploymentgetlogsdatadata.md)  | :heavy_check_mark:                                                                            | N/A                                                                                           |