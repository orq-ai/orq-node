# DeploymentGetLogsDataDeploymentsData

## Example Usage

```typescript
import { DeploymentGetLogsDataDeploymentsData } from "@orq-ai/node/models/operations";

let value: DeploymentGetLogsDataDeploymentsData = {
  choices: [
    {
      index: 447.24,
    },
  ],
  action: "invoke",
  promptConfig: {
    stream: false,
    model: "El Camino",
    modelDbId: "22adc5ed-8702-418a-89da-d22e53efa6b0",
    modelType: "vision",
    modelParameters: {},
    provider: "nvidia",
    messages: [
      {
        role: "user",
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
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `choices`                                                                                                    | [operations.DeploymentGetLogsDataChoices](../../models/operations/deploymentgetlogsdatachoices.md)[]         | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `integrationIds`                                                                                             | *string*[]                                                                                                   | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `action`                                                                                                     | [operations.DeploymentGetLogsDataAction](../../models/operations/deploymentgetlogsdataaction.md)             | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `promptConfig`                                                                                               | [operations.DeploymentGetLogsDataPromptConfig](../../models/operations/deploymentgetlogsdatapromptconfig.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `variables`                                                                                                  | [operations.DataVariables](../../models/operations/datavariables.md)[]                                       | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `performance`                                                                                                | [operations.DeploymentGetLogsDataPerformance](../../models/operations/deploymentgetlogsdataperformance.md)   | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `usage`                                                                                                      | [operations.DeploymentGetLogsDataUsage](../../models/operations/deploymentgetlogsdatausage.md)               | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `billing`                                                                                                    | [operations.DataBilling](../../models/operations/databilling.md)                                             | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `providerResponse`                                                                                           | *any*                                                                                                        | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `retrievals`                                                                                                 | [operations.DeploymentGetLogsDataRetrievals](../../models/operations/deploymentgetlogsdataretrievals.md)[]   | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `knowledgeBases`                                                                                             | [operations.DataKnowledgeBases](../../models/operations/dataknowledgebases.md)[]                             | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `tools`                                                                                                      | [operations.DeploymentGetLogsDataTools](../../models/operations/deploymentgetlogsdatatools.md)[]             | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `promptSnippets`                                                                                             | [operations.DataPromptSnippets](../../models/operations/datapromptsnippets.md)[]                             | :heavy_check_mark:                                                                                           | N/A                                                                                                          |