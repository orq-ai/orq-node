# DeploymentGetLogsEvalsDeploymentsPromptConfig

## Example Usage

```typescript
import { DeploymentGetLogsEvalsDeploymentsPromptConfig } from "@orq-ai/node/models/operations";

let value: DeploymentGetLogsEvalsDeploymentsPromptConfig = {
  stream: false,
  model: "Camry",
  modelDbId: "655e6b28-79ad-4360-a9e6-f938aaa333b7",
  modelType: "rerank",
  modelParameters: {},
  provider: "perplexity",
  messages: [
    {
      role: "exception",
      content: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `stream`                                                                                                                                   | *boolean*                                                                                                                                  | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `model`                                                                                                                                    | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `modelDbId`                                                                                                                                | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | The id of the resource                                                                                                                     |
| `modelType`                                                                                                                                | [operations.DeploymentGetLogsEvalsDeploymentsModelType](../../models/operations/deploymentgetlogsevalsdeploymentsmodeltype.md)             | :heavy_check_mark:                                                                                                                         | The type of the model                                                                                                                      |
| `modelParameters`                                                                                                                          | [operations.DeploymentGetLogsEvalsDeploymentsModelParameters](../../models/operations/deploymentgetlogsevalsdeploymentsmodelparameters.md) | :heavy_check_mark:                                                                                                                         | Model Parameters: Not all parameters apply to every model                                                                                  |
| `provider`                                                                                                                                 | [operations.DeploymentGetLogsEvalsDeploymentsProvider](../../models/operations/deploymentgetlogsevalsdeploymentsprovider.md)               | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `messages`                                                                                                                                 | [operations.DeploymentGetLogsEvalsDeploymentsMessages](../../models/operations/deploymentgetlogsevalsdeploymentsmessages.md)[]             | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `integrationId`                                                                                                                            | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | The id of the resource                                                                                                                     |
| `version`                                                                                                                                  | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |