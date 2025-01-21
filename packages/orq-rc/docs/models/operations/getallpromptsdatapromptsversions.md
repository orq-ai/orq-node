# GetAllPromptsDataPromptsVersions

Prompt version model returned from the API

## Example Usage

```typescript
import { GetAllPromptsDataPromptsVersions } from "@orq-ai/node/models/operations";

let value: GetAllPromptsDataPromptsVersions = {
  id: "<id>",
  createdById: "ac117073-b8a6-4446-95b3-509fcf901416",
  displayName: "Cornelius98",
  updatedById: "9ede0b3d-a429-40c5-bc1f-bcd7592d0098",
  promptConfig: {
    messages: [
      {
        role: "correction",
        content: [
          {
            type: "image_url",
            imageUrl: {
              url: "https://natural-gym.com/",
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

| Field                                                                                                                                                                  | Type                                                                                                                                                                   | Required                                                                                                                                                               | Description                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                   | *string*                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `createdById`                                                                                                                                                          | *string*                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `displayName`                                                                                                                                                          | *string*                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `updatedById`                                                                                                                                                          | *string*                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `description`                                                                                                                                                          | *string*                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `promptConfig`                                                                                                                                                         | [operations.GetAllPromptsDataPromptsResponse200ApplicationJSONPromptConfig](../../models/operations/getallpromptsdatapromptsresponse200applicationjsonpromptconfig.md) | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `metadata`                                                                                                                                                             | [operations.GetAllPromptsDataPromptsResponse200ApplicationJSONMetadata](../../models/operations/getallpromptsdatapromptsresponse200applicationjsonmetadata.md)         | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `commit`                                                                                                                                                               | *string*                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `timestamp`                                                                                                                                                            | *string*                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |