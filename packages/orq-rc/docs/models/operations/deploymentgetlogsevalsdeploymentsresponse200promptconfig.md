# DeploymentGetLogsEvalsDeploymentsResponse200PromptConfig

## Example Usage

```typescript
import { DeploymentGetLogsEvalsDeploymentsResponse200PromptConfig } from "@orq-ai/node/models/operations";

let value: DeploymentGetLogsEvalsDeploymentsResponse200PromptConfig = {
  stream: false,
  model: "Model 3",
  modelDbId: "16485b0a-34cf-45d1-bac2-6e1096ce4679",
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

| Field                                                                                                                                                            | Type                                                                                                                                                             | Required                                                                                                                                                         | Description                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `stream`                                                                                                                                                         | *boolean*                                                                                                                                                        | :heavy_check_mark:                                                                                                                                               | N/A                                                                                                                                                              |
| `model`                                                                                                                                                          | *string*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                               | N/A                                                                                                                                                              |
| `modelDbId`                                                                                                                                                      | *string*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                               | The id of the resource                                                                                                                                           |
| `modelType`                                                                                                                                                      | [operations.DeploymentGetLogsEvalsDeploymentsResponse200ModelType](../../models/operations/deploymentgetlogsevalsdeploymentsresponse200modeltype.md)             | :heavy_check_mark:                                                                                                                                               | The type of the model                                                                                                                                            |
| `modelParameters`                                                                                                                                                | [operations.DeploymentGetLogsEvalsDeploymentsResponse200ModelParameters](../../models/operations/deploymentgetlogsevalsdeploymentsresponse200modelparameters.md) | :heavy_check_mark:                                                                                                                                               | Model Parameters: Not all parameters apply to every model                                                                                                        |
| `provider`                                                                                                                                                       | [operations.DeploymentGetLogsEvalsDeploymentsResponse200Provider](../../models/operations/deploymentgetlogsevalsdeploymentsresponse200provider.md)               | :heavy_check_mark:                                                                                                                                               | N/A                                                                                                                                                              |
| `messages`                                                                                                                                                       | [operations.DeploymentGetLogsEvalsDeploymentsResponse200Messages](../../models/operations/deploymentgetlogsevalsdeploymentsresponse200messages.md)[]             | :heavy_check_mark:                                                                                                                                               | N/A                                                                                                                                                              |
| `integrationId`                                                                                                                                                  | *string*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | The id of the resource                                                                                                                                           |
| `version`                                                                                                                                                        | *string*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | N/A                                                                                                                                                              |