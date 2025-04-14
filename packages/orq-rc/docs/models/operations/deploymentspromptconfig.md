# DeploymentsPromptConfig

## Example Usage

```typescript
import { DeploymentsPromptConfig } from "@orq-ai/node/models/operations";

let value: DeploymentsPromptConfig = {
  tools: [
    {
      type: "function",
      function: {
        name: "<value>",
        parameters: {
          type: "object",
          properties: {
            "key": "<value>",
          },
        },
      },
    },
  ],
  model: "Durango",
  modelType: "tts",
  modelParameters: {},
  provider: "google-ai",
  messages: [
    {
      role: "exception",
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

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `tools`                                                                                        | [operations.DeploymentsTools](../../models/operations/deploymentstools.md)[]                   | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `model`                                                                                        | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `modelType`                                                                                    | [operations.DeploymentsModelType](../../models/operations/deploymentsmodeltype.md)             | :heavy_check_mark:                                                                             | The modality of the model                                                                      |
| `modelParameters`                                                                              | [operations.DeploymentsModelParameters](../../models/operations/deploymentsmodelparameters.md) | :heavy_check_mark:                                                                             | Model Parameters: Not all parameters apply to every model                                      |
| `provider`                                                                                     | [operations.DeploymentsProvider](../../models/operations/deploymentsprovider.md)               | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `messages`                                                                                     | [operations.DeploymentsMessages](../../models/operations/deploymentsmessages.md)[]             | :heavy_check_mark:                                                                             | N/A                                                                                            |