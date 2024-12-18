# GetAllPromptsItemsVersions

Prompt version model returned from the API

## Example Usage

```typescript
import { GetAllPromptsItemsVersions } from "@orq-ai/node/models/operations";

let value: GetAllPromptsItemsVersions = {
  id: "<id>",
  createdById: "f7e2f00d-c337-4fad-ad29-f17cf16c9e18",
  displayName: "Rashad0",
  updatedById: "0a8f26d8-d8ae-40e2-9c95-fd43552eed7c",
  promptConfig: {
    messages: [
      {
        role: "correction",
        content: [
          {
            type: "image_url",
            imageUrl: {
              url: "https://mundane-descent.com/",
            },
          },
        ],
      },
    ],
  },
  metadata: {},
  commit: "<value>",
  timestamp: "<value>",
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                     | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `createdById`                                                                                                                                                            | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `displayName`                                                                                                                                                            | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `updatedById`                                                                                                                                                            | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `description`                                                                                                                                                            | *string*                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `promptConfig`                                                                                                                                                           | [operations.GetAllPromptsItemsPromptsResponse200ApplicationJSONPromptConfig](../../models/operations/getallpromptsitemspromptsresponse200applicationjsonpromptconfig.md) | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `metadata`                                                                                                                                                               | [operations.GetAllPromptsItemsPromptsResponse200ApplicationJSONMetadata](../../models/operations/getallpromptsitemspromptsresponse200applicationjsonmetadata.md)         | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `commit`                                                                                                                                                                 | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `timestamp`                                                                                                                                                              | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |