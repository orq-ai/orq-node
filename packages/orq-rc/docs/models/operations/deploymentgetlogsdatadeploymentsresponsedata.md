# DeploymentGetLogsDataDeploymentsResponseData

## Example Usage

```typescript
import { DeploymentGetLogsDataDeploymentsResponseData } from "@orq-ai/node/models/operations";

let value: DeploymentGetLogsDataDeploymentsResponseData = {
  promptConfig: {
    stream: false,
    model: "Volt",
    modelDbId: "2b43de5a-2ce5-4ae0-9d96-8db87e31ab94",
    modelType: "tts",
    modelParameters: {},
    provider: "replicate",
    messages: [
      {
        role: "exception",
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
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `choices`                                                                                                                          | [operations.DeploymentGetLogsDataDeploymentsChoices](../../models/operations/deploymentgetlogsdatadeploymentschoices.md)[]         | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `action`                                                                                                                           | [operations.DeploymentGetLogsDataDeploymentsAction](../../models/operations/deploymentgetlogsdatadeploymentsaction.md)             | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `integrationIds`                                                                                                                   | *string*[]                                                                                                                         | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `promptConfig`                                                                                                                     | [operations.DeploymentGetLogsDataDeploymentsPromptConfig](../../models/operations/deploymentgetlogsdatadeploymentspromptconfig.md) | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `variables`                                                                                                                        | [operations.DeploymentGetLogsDataVariables](../../models/operations/deploymentgetlogsdatavariables.md)[]                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `performance`                                                                                                                      | [operations.DeploymentGetLogsDataDeploymentsPerformance](../../models/operations/deploymentgetlogsdatadeploymentsperformance.md)   | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `usage`                                                                                                                            | [operations.DeploymentGetLogsDataDeploymentsUsage](../../models/operations/deploymentgetlogsdatadeploymentsusage.md)               | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `billing`                                                                                                                          | [operations.DeploymentGetLogsDataBilling](../../models/operations/deploymentgetlogsdatabilling.md)                                 | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `providerResponse`                                                                                                                 | *any*                                                                                                                              | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `retrievals`                                                                                                                       | [operations.DeploymentGetLogsDataDeploymentsRetrievals](../../models/operations/deploymentgetlogsdatadeploymentsretrievals.md)[]   | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `knowledgeBases`                                                                                                                   | [operations.DeploymentGetLogsDataKnowledgeBases](../../models/operations/deploymentgetlogsdataknowledgebases.md)[]                 | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `tools`                                                                                                                            | [operations.DeploymentGetLogsDataDeploymentsTools](../../models/operations/deploymentgetlogsdatadeploymentstools.md)[]             | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `promptSnippets`                                                                                                                   | [operations.DeploymentGetLogsDataPromptSnippets](../../models/operations/deploymentgetlogsdatapromptsnippets.md)[]                 | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |