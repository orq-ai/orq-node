# Data1

Prompt model returned from the API

## Example Usage

```typescript
import { Data1 } from "@orq-ai/node/models/operations";

let value: Data1 = {
  id: "<id>",
  owner: "<value>",
  domainId: "bd024f62-1ec9-48c5-aab9-2fc79c7bc739",
  createdById: "80c86d34-a644-47cc-ace0-f63fde8b88fb",
  displayName: "Glen.Buckridge69",
  updatedById: "21d336a9-ea8b-4ac9-8ceb-54aa0b302a8d",
  promptConfig: {
    messages: [
      {
        role: "correction",
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
  versions: [
    {
      id: "<id>",
      createdById: "bb14a6c8-d1b7-4844-8353-3f7a5979bac2",
      displayName: "Eulah71",
      updatedById: "b1a64948-9805-4c58-8533-bae6a77d7e91",
      promptConfig: {
        messages: [
          {
            role: "expected_output",
            content: "<value>",
          },
        ],
      },
      metadata: {},
      commit: "<value>",
      timestamp: "<value>",
    },
  ],
  type: "prompt",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `owner`                                                                                       | *operations.DataOwner*                                                                        | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `domainId`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdById`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `displayName`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedById`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `promptConfig`                                                                                | [operations.DataPromptConfig](../../models/operations/datapromptconfig.md)                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `metadata`                                                                                    | [operations.DataMetadata](../../models/operations/datametadata.md)                            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `created`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time the resource was created                                                    |
| `updated`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time the resource was last updated                                               |
| `versions`                                                                                    | [operations.DataVersions](../../models/operations/dataversions.md)[]                          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `type`                                                                                        | [operations.DataType](../../models/operations/datatype.md)                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |