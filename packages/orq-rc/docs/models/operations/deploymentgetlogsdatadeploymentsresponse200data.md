# DeploymentGetLogsDataDeploymentsResponse200Data

## Example Usage

```typescript
import { DeploymentGetLogsDataDeploymentsResponse200Data } from "@orq-ai/node/models/operations";

let value: DeploymentGetLogsDataDeploymentsResponse200Data = {
  promptConfig: {
    stream: false,
    model: "Beetle",
    modelDbId: "5d807a89-3d8b-4f6e-a009-4345b9cdd66e",
    modelType: "chat",
    modelParameters: {},
    provider: "anyscale",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "<value>",
          },
        ],
      },
    ],
  },
  action: "invoke",
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
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `choices`                                                                                                                                          | [operations.DeploymentGetLogsDataDeploymentsResponseChoices](../../models/operations/deploymentgetlogsdatadeploymentsresponsechoices.md)[]         | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `integrationIds`                                                                                                                                   | *string*[]                                                                                                                                         | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `promptConfig`                                                                                                                                     | [operations.DeploymentGetLogsDataDeploymentsResponsePromptConfig](../../models/operations/deploymentgetlogsdatadeploymentsresponsepromptconfig.md) | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `action`                                                                                                                                           | [operations.DeploymentGetLogsDataDeploymentsResponseAction](../../models/operations/deploymentgetlogsdatadeploymentsresponseaction.md)             | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `variables`                                                                                                                                        | [operations.DeploymentGetLogsDataDeploymentsVariables](../../models/operations/deploymentgetlogsdatadeploymentsvariables.md)[]                     | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `performance`                                                                                                                                      | [operations.DeploymentGetLogsDataDeploymentsResponsePerformance](../../models/operations/deploymentgetlogsdatadeploymentsresponseperformance.md)   | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `usage`                                                                                                                                            | [operations.DeploymentGetLogsDataDeploymentsResponseUsage](../../models/operations/deploymentgetlogsdatadeploymentsresponseusage.md)               | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `billing`                                                                                                                                          | [operations.DeploymentGetLogsDataDeploymentsBilling](../../models/operations/deploymentgetlogsdatadeploymentsbilling.md)                           | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `providerResponse`                                                                                                                                 | *any*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `retrievals`                                                                                                                                       | [operations.DeploymentGetLogsDataDeploymentsResponseRetrievals](../../models/operations/deploymentgetlogsdatadeploymentsresponseretrievals.md)[]   | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `knowledgeBases`                                                                                                                                   | [operations.DeploymentGetLogsDataDeploymentsKnowledgeBases](../../models/operations/deploymentgetlogsdatadeploymentsknowledgebases.md)[]           | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `tools`                                                                                                                                            | [operations.DeploymentGetLogsDataDeploymentsResponseTools](../../models/operations/deploymentgetlogsdatadeploymentsresponsetools.md)[]             | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `promptSnippets`                                                                                                                                   | [operations.DeploymentGetLogsDataDeploymentsPromptSnippets](../../models/operations/deploymentgetlogsdatadeploymentspromptsnippets.md)[]           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |