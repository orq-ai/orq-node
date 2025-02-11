# ItemsVersions

Prompt version model returned from the API

## Example Usage

```typescript
import { ItemsVersions } from "@orq-ai/node/models/operations";

let value: ItemsVersions = {
  id: "<id>",
  createdById: "7b1eb2f8-f384-449e-acb8-e7dd3c0538b1",
  displayName: "Trever_Pagac",
  updatedById: "b0e803f9-1470-4673-b9c3-9afcd72f271f",
  promptConfig: {
    messages: [
      {
        role: "prompt",
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

| Field                                                                                                                                                                | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                 | *string*                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `createdById`                                                                                                                                                        | *string*                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `displayName`                                                                                                                                                        | *string*                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `updatedById`                                                                                                                                                        | *string*                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `description`                                                                                                                                                        | *string*                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `promptConfig`                                                                                                                                                       | [operations.GetAllPromptTemplatesItemsPromptTemplatesResponsePromptConfig](../../models/operations/getallprompttemplatesitemsprompttemplatesresponsepromptconfig.md) | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `metadata`                                                                                                                                                           | [operations.GetAllPromptTemplatesItemsPromptTemplatesResponseMetadata](../../models/operations/getallprompttemplatesitemsprompttemplatesresponsemetadata.md)         | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `commit`                                                                                                                                                             | *string*                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `timestamp`                                                                                                                                                          | *string*                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |