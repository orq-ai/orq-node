# DeploymentGetLogsEvalsDeploymentsResponsePromptConfig

## Example Usage

```typescript
import { DeploymentGetLogsEvalsDeploymentsResponsePromptConfig } from "@orq-ai/node/models/operations";

let value: DeploymentGetLogsEvalsDeploymentsResponsePromptConfig = {
  stream: false,
  model: "Accord",
  modelDbId: "681d739c-5b6f-4c50-9a31-ef4427dbd3be",
  modelType: "stt",
  modelParameters: {},
  provider: "azure",
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
};
```

## Fields

| Field                                                                                                                                                      | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `stream`                                                                                                                                                   | *boolean*                                                                                                                                                  | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `model`                                                                                                                                                    | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `modelDbId`                                                                                                                                                | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | The id of the resource                                                                                                                                     |
| `modelType`                                                                                                                                                | [operations.DeploymentGetLogsEvalsDeploymentsResponseModelType](../../models/operations/deploymentgetlogsevalsdeploymentsresponsemodeltype.md)             | :heavy_check_mark:                                                                                                                                         | The type of the model                                                                                                                                      |
| `modelParameters`                                                                                                                                          | [operations.DeploymentGetLogsEvalsDeploymentsResponseModelParameters](../../models/operations/deploymentgetlogsevalsdeploymentsresponsemodelparameters.md) | :heavy_check_mark:                                                                                                                                         | Model Parameters: Not all parameters apply to every model                                                                                                  |
| `provider`                                                                                                                                                 | [operations.DeploymentGetLogsEvalsDeploymentsResponseProvider](../../models/operations/deploymentgetlogsevalsdeploymentsresponseprovider.md)               | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `messages`                                                                                                                                                 | [operations.DeploymentGetLogsEvalsDeploymentsResponseMessages](../../models/operations/deploymentgetlogsevalsdeploymentsresponsemessages.md)[]             | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `integrationId`                                                                                                                                            | *string*                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                         | The id of the resource                                                                                                                                     |
| `version`                                                                                                                                                  | *string*                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                         | N/A                                                                                                                                                        |