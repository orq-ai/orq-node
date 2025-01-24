# DeploymentGetLogsEvalsDeploymentsResponseData

## Example Usage

```typescript
import { DeploymentGetLogsEvalsDeploymentsResponseData } from "@orq-ai/node/models/operations";

let value: DeploymentGetLogsEvalsDeploymentsResponseData = {
  action: "invoke",
  promptConfig: {
    stream: false,
    model: "El Camino",
    modelDbId: "7cfde7b4-15b4-4dc3-b5d3-55c0196a4ec1",
    modelType: "moderations",
    modelParameters: {},
    provider: "togetherai",
    messages: [
      {
        role: "prompt",
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

| Field                                                                                                                                                      | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `choices`                                                                                                                                                  | [operations.DeploymentGetLogsEvalsDeploymentsResponseChoices](../../models/operations/deploymentgetlogsevalsdeploymentsresponsechoices.md)[]               | :heavy_minus_sign:                                                                                                                                         | N/A                                                                                                                                                        |
| `action`                                                                                                                                                   | [operations.DeploymentGetLogsEvalsDeploymentsResponseAction](../../models/operations/deploymentgetlogsevalsdeploymentsresponseaction.md)                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `promptConfig`                                                                                                                                             | [operations.DeploymentGetLogsEvalsDeploymentsResponsePromptConfig](../../models/operations/deploymentgetlogsevalsdeploymentsresponsepromptconfig.md)       | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `variables`                                                                                                                                                | [operations.DeploymentGetLogsEvalsDeploymentsResponseVariables](../../models/operations/deploymentgetlogsevalsdeploymentsresponsevariables.md)[]           | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `performance`                                                                                                                                              | [operations.DeploymentGetLogsEvalsDeploymentsResponsePerformance](../../models/operations/deploymentgetlogsevalsdeploymentsresponseperformance.md)         | :heavy_minus_sign:                                                                                                                                         | N/A                                                                                                                                                        |
| `usage`                                                                                                                                                    | [operations.DeploymentGetLogsEvalsDeploymentsResponseUsage](../../models/operations/deploymentgetlogsevalsdeploymentsresponseusage.md)                     | :heavy_minus_sign:                                                                                                                                         | N/A                                                                                                                                                        |
| `billing`                                                                                                                                                  | [operations.DeploymentGetLogsEvalsDeploymentsResponseBilling](../../models/operations/deploymentgetlogsevalsdeploymentsresponsebilling.md)                 | :heavy_minus_sign:                                                                                                                                         | N/A                                                                                                                                                        |
| `tools`                                                                                                                                                    | [operations.DeploymentGetLogsEvalsDeploymentsResponseTools](../../models/operations/deploymentgetlogsevalsdeploymentsresponsetools.md)[]                   | :heavy_minus_sign:                                                                                                                                         | N/A                                                                                                                                                        |
| `promptSnippets`                                                                                                                                           | [operations.DeploymentGetLogsEvalsDeploymentsResponsePromptSnippets](../../models/operations/deploymentgetlogsevalsdeploymentsresponsepromptsnippets.md)[] | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |