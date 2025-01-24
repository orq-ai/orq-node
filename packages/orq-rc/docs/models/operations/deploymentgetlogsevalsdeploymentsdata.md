# DeploymentGetLogsEvalsDeploymentsData

## Example Usage

```typescript
import { DeploymentGetLogsEvalsDeploymentsData } from "@orq-ai/node/models/operations";

let value: DeploymentGetLogsEvalsDeploymentsData = {
  action: "invoke",
  promptConfig: {
    stream: false,
    model: "Altima",
    modelDbId: "cecdd2fa-6e9f-4c5b-9b5e-25a7af1cd447",
    modelType: "image",
    modelParameters: {},
    provider: "huggingface",
    messages: [
      {
        role: "exception",
        content: [
          {
            type: "image_url",
            imageUrl: {
              url: "https://formal-surface.info",
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
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `choices`                                                                                                                                  | [operations.DeploymentGetLogsEvalsDeploymentsChoices](../../models/operations/deploymentgetlogsevalsdeploymentschoices.md)[]               | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |
| `action`                                                                                                                                   | [operations.DeploymentGetLogsEvalsDeploymentsAction](../../models/operations/deploymentgetlogsevalsdeploymentsaction.md)                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `promptConfig`                                                                                                                             | [operations.DeploymentGetLogsEvalsDeploymentsPromptConfig](../../models/operations/deploymentgetlogsevalsdeploymentspromptconfig.md)       | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `variables`                                                                                                                                | [operations.DeploymentGetLogsEvalsDeploymentsVariables](../../models/operations/deploymentgetlogsevalsdeploymentsvariables.md)[]           | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `performance`                                                                                                                              | [operations.DeploymentGetLogsEvalsDeploymentsPerformance](../../models/operations/deploymentgetlogsevalsdeploymentsperformance.md)         | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |
| `usage`                                                                                                                                    | [operations.DeploymentGetLogsEvalsDeploymentsUsage](../../models/operations/deploymentgetlogsevalsdeploymentsusage.md)                     | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |
| `billing`                                                                                                                                  | [operations.DeploymentGetLogsEvalsDeploymentsBilling](../../models/operations/deploymentgetlogsevalsdeploymentsbilling.md)                 | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |
| `tools`                                                                                                                                    | [operations.DeploymentGetLogsEvalsDeploymentsTools](../../models/operations/deploymentgetlogsevalsdeploymentstools.md)[]                   | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |
| `promptSnippets`                                                                                                                           | [operations.DeploymentGetLogsEvalsDeploymentsPromptSnippets](../../models/operations/deploymentgetlogsevalsdeploymentspromptsnippets.md)[] | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |