# Data

## Example Usage

```typescript
import { Data } from "@orq-ai/node/models/operations";

let value: Data = {
  id: "999fa56b-0aa3-4255-997f-132a47321a23",
  created: "<value>",
  updated: "<value>",
  key: "<key>",
  description:
    "newsstand farm bourgeoisie ah how elliptical aha well-to-do below",
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
    model: "Land Cruiser",
    modelType: "vision",
    modelParameters: {},
    provider: "anthropic",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "image_url",
            imageUrl: {
              url: "https://quarrelsome-pecan.info",
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