# GetAllPromptsData

Prompt model returned from the API

## Example Usage

```typescript
import { GetAllPromptsData } from "@orq-ai/node/models/operations";

let value: GetAllPromptsData = {
  id: "<id>",
  owner: "vendor",
  domainId: "0659c12a-b9f7-42a9-b98f-2123993777c7",
  createdById: "28d2792c-1f75-416a-814d-a32e42f4176e",
  displayName: "Aubrey.Turner",
  updatedById: "83953843-e246-443c-b518-25e5a82ad1cb",
  promptConfig: {
    messages: [
      {
        role: "system",
        content: "<value>",
      },
    ],
  },
  metadata: {},
  type: "prompt",
  versions: [
    {
      id: "<id>",
      createdById: "b0bd7640-2fd4-4f54-92ef-5b51681d739c",
      displayName: "Maybell_Windler35",
      updatedById: "a31ef442-7dbd-43be-94b6-4f5167cfde7b",
      promptConfig: {
        messages: [
          {
            role: "system",
            content: "<value>",
          },
        ],
      },
      metadata: {},
      timestamp: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                      | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                       | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `owner`                                                                                                                                                    | *operations.GetAllPromptsOwner*                                                                                                                            | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `domainId`                                                                                                                                                 | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `createdById`                                                                                                                                              | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `displayName`                                                                                                                                              | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | The prompt’s name, meant to be displayable in the UI.                                                                                                      |
| `updatedById`                                                                                                                                              | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `description`                                                                                                                                              | *string*                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                         | The prompt’s description, meant to be displayable in the UI. Use this field to optionally store a long form explanation of the prompt for your own purpose |
| `promptConfig`                                                                                                                                             | [operations.GetAllPromptsPromptConfig](../../models/operations/getallpromptspromptconfig.md)                                                               | :heavy_check_mark:                                                                                                                                         | A list of messages compatible with the openAI schema                                                                                                       |
| `metadata`                                                                                                                                                 | [operations.GetAllPromptsMetadata](../../models/operations/getallpromptsmetadata.md)                                                                       | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `created`                                                                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                              | :heavy_minus_sign:                                                                                                                                         | The date and time the resource was created                                                                                                                 |
| `updated`                                                                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                              | :heavy_minus_sign:                                                                                                                                         | The date and time the resource was last updated                                                                                                            |
| `type`                                                                                                                                                     | [operations.GetAllPromptsType](../../models/operations/getallpromptstype.md)                                                                               | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `versions`                                                                                                                                                 | [operations.GetAllPromptsVersions](../../models/operations/getallpromptsversions.md)[]                                                                     | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |