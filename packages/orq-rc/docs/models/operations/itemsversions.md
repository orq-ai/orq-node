# ItemsVersions

Prompt version model returned from the API

## Example Usage

```typescript
import { ItemsVersions } from "@orq-ai/node/models/operations";

let value: ItemsVersions = {
  id: "<id>",
  createdById: "619391fe-6347-40a6-a6cb-f5ec594d1326",
  displayName: "Julie.Abbott6",
  updatedById: "e3dc291b-ac7e-404b-a621-d7eb658eb0be",
  promptConfig: {
    messages: [
      {
        role: "assistant",
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