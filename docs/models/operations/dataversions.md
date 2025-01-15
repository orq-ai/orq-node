# DataVersions

Prompt version model returned from the API

## Example Usage

```typescript
import { DataVersions } from "@orq-ai/node/models/operations";

let value: DataVersions = {
  id: "<id>",
  createdById: "d4063065-b165-4ae2-9d90-c8c6a3358bad",
  displayName: "Tara_Dibbert25",
  updatedById: "e1fdda3c-097c-4067-826e-74804ca093fc",
  promptConfig: {
    messages: [
      {
        role: "exception",
        content: "<value>",
      },
    ],
  },
  metadata: {},
  commit: "<value>",
  timestamp: "<value>",
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                     | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `createdById`                                                                                                                            | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `displayName`                                                                                                                            | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `updatedById`                                                                                                                            | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `description`                                                                                                                            | *string*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |
| `promptConfig`                                                                                                                           | [operations.GetAllPromptsDataPromptsResponse200PromptConfig](../../models/operations/getallpromptsdatapromptsresponse200promptconfig.md) | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `metadata`                                                                                                                               | [operations.GetAllPromptsDataPromptsResponse200Metadata](../../models/operations/getallpromptsdatapromptsresponse200metadata.md)         | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `commit`                                                                                                                                 | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `timestamp`                                                                                                                              | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |