# Data

## Example Usage

```typescript
import { Data } from "@orq-ai/node/models/operations";

let value: Data = {
  id: "4c790999-fa56-4b0a-8a32-5597f132a473",
  created: "<value>",
  updated: "<value>",
  key: "<key>",
  description: "gosh arraign barracks",
  promptConfig: {
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
    model: "Model 3",
    modelType: "tts",
    modelParameters: {},
    provider: "replicate",
    messages: [
      {
        role: "tool",
        content: "<value>",
      },
    ],
  },
  version: "<value>",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `id`                                                                                     | *string*                                                                                 | :heavy_check_mark:                                                                       | Unique identifier for the object.                                                        |
| `created`                                                                                | *string*                                                                                 | :heavy_check_mark:                                                                       | Date in ISO 8601 format at which the object was created.                                 |
| `updated`                                                                                | *string*                                                                                 | :heavy_check_mark:                                                                       | Date in ISO 8601 format at which the object was last updated.                            |
| `key`                                                                                    | *string*                                                                                 | :heavy_check_mark:                                                                       | The deployment unique key                                                                |
| `description`                                                                            | *string*                                                                                 | :heavy_check_mark:                                                                       | An arbitrary string attached to the object. Often useful for displaying to users.        |
| `promptConfig`                                                                           | [operations.DeploymentsPromptConfig](../../models/operations/deploymentspromptconfig.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `version`                                                                                | *string*                                                                                 | :heavy_check_mark:                                                                       | THe version of the deployment                                                            |