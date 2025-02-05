# CreatePromptResponseBody

Prompt model returned from the API

## Example Usage

```typescript
import { CreatePromptResponseBody } from "@orq-ai/node/models/operations";

let value: CreatePromptResponseBody = {
  id: "<id>",
  owner: "vendor",
  domainId: "2d07a09f-2b92-4008-afab-792ecf432fc2",
  createdById: "622f4f17-2081-4bb2-bfb4-bb5659e2e0a6",
  displayName: "Miracle_Nolan",
  updatedById: "84949226-6420-4047-8b7e-0259d540d69f",
  promptConfig: {
    messages: [
      {
        role: "assistant",
        content: [
          {
            type: "image_url",
            imageUrl: {
              url: "https://muted-wasabi.info",
            },
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
      createdById: "916b3fa4-c1f0-4e4c-904b-81669ad762cb",
      displayName: "Joshua.Cruickshank",
      updatedById: "7bd72d9b-bf4b-4563-b5f4-3947d3698fab",
      promptConfig: {
        messages: [
          {
            role: "exception",
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