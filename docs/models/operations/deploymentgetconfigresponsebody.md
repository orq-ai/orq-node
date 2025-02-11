# DeploymentGetConfigResponseBody

The deployment configuration

## Example Usage

```typescript
import { DeploymentGetConfigResponseBody } from "@orq-ai/node/models/operations";

let value: DeploymentGetConfigResponseBody = {
  id: "<id>",
  provider: "<value>",
  model: "Sentra",
  version: "<value>",
  messages: [
    {
      role: "system",
      content: [
        {
          type: "text",
          text: "<value>",
        },
      ],
    },
  ],
  parameters: {},
};
```

## Fields

| Field                                                                                                                                                                  | Type                                                                                                                                                                   | Required                                                                                                                                                               | Description                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                   | *string*                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                     | A unique identifier for the response. Can be used to add metrics to the transaction.                                                                                   |
| `provider`                                                                                                                                                             | *string*                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                     | The provider of the model                                                                                                                                              |
| `model`                                                                                                                                                                | *string*                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                     | The model of the configuration                                                                                                                                         |
| `type`                                                                                                                                                                 | [operations.DeploymentGetConfigDeploymentsResponseType](../../models/operations/deploymentgetconfigdeploymentsresponsetype.md)                                         | :heavy_minus_sign:                                                                                                                                                     | The type of the model. Current `chat`,`completion` and `image` are supported                                                                                           |
| `version`                                                                                                                                                              | *string*                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                     | The current version of the deployment                                                                                                                                  |
| `messages`                                                                                                                                                             | [operations.DeploymentGetConfigMessages](../../models/operations/deploymentgetconfigmessages.md)[]                                                                     | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `parameters`                                                                                                                                                           | [operations.ParametersT](../../models/operations/parameterst.md)                                                                                                       | :heavy_check_mark:                                                                                                                                                     | Model Parameters: Not all parameters apply to every model                                                                                                              |
| `tools`                                                                                                                                                                | [operations.Tools](../../models/operations/tools.md)[]                                                                                                                 | :heavy_minus_sign:                                                                                                                                                     | A list of tools the model may call. Currently, only functions are supported as a tool. Use this to provide a list of functions the model may generate JSON inputs for. |