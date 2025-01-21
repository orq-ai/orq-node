# DeploymentGetLogsDataPromptConfig

## Example Usage

```typescript
import { DeploymentGetLogsDataPromptConfig } from "@orq-ai/node/models/operations";

let value: DeploymentGetLogsDataPromptConfig = {
  stream: false,
  model: "Land Cruiser",
  modelDbId: "d736216a-4eba-4b0d-8e09-a3da3f3a7b1f",
  modelType: "completion",
  modelParameters: {},
  provider: "anyscale",
  messages: [
    {
      role: "user",
      content: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `stream`                                                                                                           | *boolean*                                                                                                          | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `model`                                                                                                            | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `modelDbId`                                                                                                        | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The id of the resource                                                                                             |
| `modelType`                                                                                                        | [operations.DeploymentGetLogsDataModelType](../../models/operations/deploymentgetlogsdatamodeltype.md)             | :heavy_check_mark:                                                                                                 | The type of the model                                                                                              |
| `modelParameters`                                                                                                  | [operations.DeploymentGetLogsDataModelParameters](../../models/operations/deploymentgetlogsdatamodelparameters.md) | :heavy_check_mark:                                                                                                 | Model Parameters: Not all parameters apply to every model                                                          |
| `provider`                                                                                                         | [operations.DeploymentGetLogsDataProvider](../../models/operations/deploymentgetlogsdataprovider.md)               | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `messages`                                                                                                         | [operations.DeploymentGetLogsDataMessages](../../models/operations/deploymentgetlogsdatamessages.md)[]             | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `integrationId`                                                                                                    | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The id of the resource                                                                                             |
| `version`                                                                                                          | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |