# ItemsVersions

Prompt version model returned from the API

## Example Usage

```typescript
import { ItemsVersions } from "@orq-ai/node/models/operations";

let value: ItemsVersions = {
  id: "<id>",
  createdById: "cc5879be-9ef8-44ab-8a03-33fa320454b9",
  displayName: "Lysanne.Robel14",
  updatedById: "846c8eb2-1a8b-48ff-94cc-d6e6b953ae61",
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