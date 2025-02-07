# UpdatePromptResponseBody

Prompt model returned from the API

## Example Usage

```typescript
import { UpdatePromptResponseBody } from "@orq-ai/node/models/operations";

let value: UpdatePromptResponseBody = {
  id: "<id>",
  owner: "vendor",
  domainId: "a403b946-a266-4885-bc10-6e42e25b436c",
  createdById: "02f98d00-fdb2-47ee-80c0-f6f545b3d9ff",
  displayName: "Verla_Barrows96",
  updatedById: "77dac7ab-b015-4066-8e9b-e704de54e5a4",
  promptConfig: {
    messages: [
      {
        role: "tool",
        content: [
          {
            type: "image_url",
            imageUrl: {
              url: "https://rewarding-rule.biz/",
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
      createdById: "8a2f7f37-2036-46ea-86f9-5b7ee584afd5",
      displayName: "Vita48",
      updatedById: "f45802e0-16b4-444d-a38f-b5cf5b1e1584",
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
      timestamp: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                      | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                       | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `owner`                                                                                                                                                    | *operations.UpdatePromptOwner*                                                                                                                             | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `domainId`                                                                                                                                                 | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `createdById`                                                                                                                                              | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `displayName`                                                                                                                                              | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | The prompt’s name, meant to be displayable in the UI.                                                                                                      |
| `updatedById`                                                                                                                                              | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `description`                                                                                                                                              | *string*                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                         | The prompt’s description, meant to be displayable in the UI. Use this field to optionally store a long form explanation of the prompt for your own purpose |
| `promptConfig`                                                                                                                                             | [operations.UpdatePromptPromptsPromptConfig](../../models/operations/updatepromptpromptspromptconfig.md)                                                   | :heavy_check_mark:                                                                                                                                         | A list of messages compatible with the openAI schema                                                                                                       |
| `metadata`                                                                                                                                                 | [operations.UpdatePromptPromptsMetadata](../../models/operations/updatepromptpromptsmetadata.md)                                                           | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `created`                                                                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                              | :heavy_minus_sign:                                                                                                                                         | The date and time the resource was created                                                                                                                 |
| `updated`                                                                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                              | :heavy_minus_sign:                                                                                                                                         | The date and time the resource was last updated                                                                                                            |
| `type`                                                                                                                                                     | [operations.UpdatePromptPromptsType](../../models/operations/updatepromptpromptstype.md)                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `versions`                                                                                                                                                 | [operations.UpdatePromptVersions](../../models/operations/updatepromptversions.md)[]                                                                       | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |