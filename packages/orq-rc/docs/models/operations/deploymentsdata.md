# DeploymentsData

## Example Usage

```typescript
import { DeploymentsData } from "@orq-ai/node/models/operations";

let value: DeploymentsData = {
  id: "2f4b88f3-1f79-4f25-8390-5987d64a4e36",
  created: "<value>",
  updated: "<value>",
  key: "<key>",
  description: "before pish shakily magnetize",
  promptConfig: {
    tools: [
      {
        type: "function",
        function: {
          name: "<value>",
          parameters: {
            type: "object",
            properties: {},
          },
        },
      },
    ],
    model: "LeBaron",
    modelType: "rerank",
    modelParameters: {},
    provider: "azure",
    messages: [],
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