# Data

## Example Usage

```typescript
import { Data } from "@orq-ai/node/models/operations";

let value: Data = {
  id: "0aa32559-7f13-42a4-a732-1a235d1d1f7f",
  created: "<value>",
  updated: "<value>",
  key: "<key>",
  description: "woot minus apropos shrilly ick swine proud plait",
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
    model: "Escalade",
    modelType: "completion",
    modelParameters: {},
    provider: "google",
    messages: [
      {
        role: "tool",
        content: [
          {
            type: "image_url",
            imageUrl: {
              url: "https://qualified-hose.org",
            },
          },
        ],
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