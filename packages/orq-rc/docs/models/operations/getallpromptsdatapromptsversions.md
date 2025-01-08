# GetAllPromptsDataPromptsVersions

Prompt version model returned from the API

## Example Usage

```typescript
import { GetAllPromptsDataPromptsVersions } from "@orq-ai/node/models/operations";

let value: GetAllPromptsDataPromptsVersions = {
  id: "<id>",
  createdById: "a429bd4e-9bce-446e-bd67-b0538c2f7c57",
  displayName: "Maryjane95",
  updatedById: "a1c22d01-e4ca-41c3-bb68-f44459ce0a99",
  promptConfig: {
    messages: [
      {
        role: "expected_output",
        content: [
          {
            type: "text",
            text: "<value>",
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