# DeploymentGetLogsDataDeploymentsPromptConfig

## Example Usage

```typescript
import { DeploymentGetLogsDataDeploymentsPromptConfig } from "@orq-ai/node/models/operations";

let value: DeploymentGetLogsDataDeploymentsPromptConfig = {
  stream: false,
  model: "Grand Caravan",
  modelDbId: "9377029f-a1d6-4193-b65a-6138c0919d37",
  modelType: "completion",
  modelParameters: {},
  provider: "anthropic",
  messages: [
    {
      role: "expected_output",
      content: [
        {
          type: "image_url",
          imageUrl: {
            url: "https://natural-juggernaut.name",
          },
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `stream`                                                                                                                                 | *boolean*                                                                                                                                | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `model`                                                                                                                                  | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `modelDbId`                                                                                                                              | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | The id of the resource                                                                                                                   |
| `modelType`                                                                                                                              | [operations.DeploymentGetLogsDataDeploymentsModelType](../../models/operations/deploymentgetlogsdatadeploymentsmodeltype.md)             | :heavy_check_mark:                                                                                                                       | The type of the model                                                                                                                    |
| `modelParameters`                                                                                                                        | [operations.DeploymentGetLogsDataDeploymentsModelParameters](../../models/operations/deploymentgetlogsdatadeploymentsmodelparameters.md) | :heavy_check_mark:                                                                                                                       | Model Parameters: Not all parameters apply to every model                                                                                |
| `provider`                                                                                                                               | [operations.DeploymentGetLogsDataDeploymentsProvider](../../models/operations/deploymentgetlogsdatadeploymentsprovider.md)               | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `messages`                                                                                                                               | [operations.DeploymentGetLogsDataDeploymentsMessages](../../models/operations/deploymentgetlogsdatadeploymentsmessages.md)[]             | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `integrationId`                                                                                                                          | *string*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | The id of the resource                                                                                                                   |
| `version`                                                                                                                                | *string*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |