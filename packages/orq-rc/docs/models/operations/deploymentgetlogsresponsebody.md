# DeploymentGetLogsResponseBody

Logs Retrieved.

## Example Usage

```typescript
import { DeploymentGetLogsResponseBody } from "@orq-ai/node/models/operations";

let value: DeploymentGetLogsResponseBody = {
  object: "list",
  data: [
    {
      id: "<id>",
      workspaceId: "9fb91318-fd78-40d6-80e7-a8cf9190514e",
      startedAt: new Date("2025-05-07T15:08:34.450Z"),
      evals: [
        {
          type: "string_array",
          values: [
            "<value>",
          ],
          id: "<id>",
          status: "completed",
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
      productType: "playgrounds",
      relatedEntities: [
        {
          type: "account",
          accountId: "3e481052-730b-452f-879f-12b86197a464",
        },
      ],
      data: {
        choices: [
          {
            index: 5080.14,
          },
        ],
        action: "invoke",
        promptConfig: {
          stream: false,
          model: "Ranchero",
          modelDbId: "07caf025-08a6-46e9-8453-4aa48d404f01",
          modelType: "stt",
          modelParameters: {},
          provider: "elevenlabs",
          messages: [
            {
              role: "tool",
              content: "<value>",
            },
          ],
        },
        variables: [
          {
            key: "<key>",
          },
        ],
        billing: {
          billable: false,
        },
        promptSnippets: [
          {
            id: "<id>",
            key: "<key>",
            value: "<value>",
          },
        ],
      },
    },
  ],
  hasMore: false,
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `object`                                                                                 | [operations.DeploymentGetLogsObject](../../models/operations/deploymentgetlogsobject.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `data`                                                                                   | *operations.DeploymentGetLogsData*[]                                                     | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `hasMore`                                                                                | *boolean*                                                                                | :heavy_check_mark:                                                                       | N/A                                                                                      |