# DeploymentGetLogsEvalsPromptConfig

## Example Usage

```typescript
import { DeploymentGetLogsEvalsPromptConfig } from "@orq-ai/node/models/operations";

let value: DeploymentGetLogsEvalsPromptConfig = {
  stream: false,
  model: "Explorer",
  modelDbId: "98c04981-2c8a-4d95-a824-a00efe3c71cc",
  modelType: "moderations",
  modelParameters: {},
  provider: "elevenlabs",
  messages: [
    {
      role: "assistant",
      content: [
        {
          type: "image_url",
          imageUrl: {
            url: "https://wry-spear.info",
          },
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `stream`                                                                                                             | *boolean*                                                                                                            | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `model`                                                                                                              | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `modelDbId`                                                                                                          | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The id of the resource                                                                                               |
| `modelType`                                                                                                          | [operations.DeploymentGetLogsEvalsModelType](../../models/operations/deploymentgetlogsevalsmodeltype.md)             | :heavy_check_mark:                                                                                                   | The type of the model                                                                                                |
| `modelParameters`                                                                                                    | [operations.DeploymentGetLogsEvalsModelParameters](../../models/operations/deploymentgetlogsevalsmodelparameters.md) | :heavy_check_mark:                                                                                                   | Model Parameters: Not all parameters apply to every model                                                            |
| `provider`                                                                                                           | [operations.DeploymentGetLogsEvalsProvider](../../models/operations/deploymentgetlogsevalsprovider.md)               | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `messages`                                                                                                           | [operations.DeploymentGetLogsEvalsMessages](../../models/operations/deploymentgetlogsevalsmessages.md)[]             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `integrationId`                                                                                                      | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | The id of the resource                                                                                               |
| `version`                                                                                                            | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |