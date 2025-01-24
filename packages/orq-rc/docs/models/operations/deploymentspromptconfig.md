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
  model: "Grand Cherokee",
  modelType: "chat",
  modelParameters: {},
  provider: "groq",
  messages: [
    {
      role: "tool",
      content: [
        {
          type: "image_url",
          imageUrl: {
            url: "https://hateful-humor.net",
          },
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
| `modelType`                                                                                    | [operations.DeploymentsModelType](../../models/operations/deploymentsmodeltype.md)             | :heavy_check_mark:                                                                             | The type of the model                                                                          |
| `modelParameters`                                                                              | [operations.DeploymentsModelParameters](../../models/operations/deploymentsmodelparameters.md) | :heavy_check_mark:                                                                             | Model Parameters: Not all parameters apply to every model                                      |
| `provider`                                                                                     | [operations.DeploymentsProvider](../../models/operations/deploymentsprovider.md)               | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `messages`                                                                                     | [operations.DeploymentsMessages](../../models/operations/deploymentsmessages.md)[]             | :heavy_check_mark:                                                                             | N/A                                                                                            |