# CreatePromptResponseBody

Prompt model returned from the API

## Example Usage

```typescript
import { CreatePromptResponseBody } from "@orq-ai/node/models/operations";

let value: CreatePromptResponseBody = {
  id: "<id>",
  owner: "<value>",
  domainId: "cdc47236-b8ed-4099-9f08-309cc0603335",
  createdById: "f5e2c070-cf0e-4c5e-9461-a07ad2cb8919",
  displayName: "Sandy.Mayer87",
  updatedById: "1b690fe9-06fa-427f-9809-4168088c68be",
  promptConfig: {
    messages: [
      {
        role: "tool",
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
  type: "prompt",
  versions: [
    {
      id: "<id>",
      createdById: "c6a7bb3a-d3ca-4f42-b44c-ba3df8a84453",
      displayName: "Ryann_Hilll",
      updatedById: "039a9dfc-7d1a-482f-859e-81d5fed5cf87",
      promptConfig: {
        messages: [
          {
            role: "prompt",
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
      timestamp: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                      | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                       | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `owner`                                                                                                                                                    | *operations.CreatePromptOwner*                                                                                                                             | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `domainId`                                                                                                                                                 | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `createdById`                                                                                                                                              | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `displayName`                                                                                                                                              | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | The prompt’s name, meant to be displayable in the UI.                                                                                                      |
| `updatedById`                                                                                                                                              | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `description`                                                                                                                                              | *string*                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                         | The prompt’s description, meant to be displayable in the UI. Use this field to optionally store a long form explanation of the prompt for your own purpose |
| `promptConfig`                                                                                                                                             | [operations.CreatePromptPromptsPromptConfig](../../models/operations/createpromptpromptspromptconfig.md)                                                   | :heavy_check_mark:                                                                                                                                         | A list of messages compatible with the openAI schema                                                                                                       |
| `metadata`                                                                                                                                                 | [operations.CreatePromptPromptsMetadata](../../models/operations/createpromptpromptsmetadata.md)                                                           | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `created`                                                                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                              | :heavy_minus_sign:                                                                                                                                         | The date and time the resource was created                                                                                                                 |
| `updated`                                                                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                              | :heavy_minus_sign:                                                                                                                                         | The date and time the resource was last updated                                                                                                            |
| `type`                                                                                                                                                     | [operations.CreatePromptPromptsType](../../models/operations/createpromptpromptstype.md)                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `versions`                                                                                                                                                 | [operations.CreatePromptVersions](../../models/operations/createpromptversions.md)[]                                                                       | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |