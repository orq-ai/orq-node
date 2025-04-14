# Data

## Example Usage

```typescript
import { Data } from "@orq-ai/node/models/operations";

let value: Data = {
  id: "9ab092b0-7aaa-47ec-ba5e-bc4ffa1aa96b",
  created: "<value>",
  updated: "<value>",
  key: "<key>",
  description: "thankfully blacken considering phew footrest",
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
    modelType: "tts",
    modelParameters: {},
    provider: "replicate",
    messages: [
      {
        role: "exception",
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