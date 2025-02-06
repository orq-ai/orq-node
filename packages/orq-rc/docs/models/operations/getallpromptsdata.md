# GetAllPromptsData

Prompt model returned from the API

## Example Usage

```typescript
import { GetAllPromptsData } from "@orq-ai/node/models/operations";

let value: GetAllPromptsData = {
  id: "<id>",
  owner: "<value>",
  domainId: "29304a95-d448-4772-b846-bec69b652bd5",
  createdById: "9c6b6187-4e60-466d-9c3d-3510ae7dcafc",
  displayName: "Pat21",
  updatedById: "3fb799f2-4b3d-4520-a9d4-ec0993570226",
  promptConfig: {
    messages: [
      {
        role: "correction",
        content: "<value>",
      },
    ],
  },
  metadata: {},
  type: "prompt",
  versions: [
    {
      id: "<id>",
      createdById: "caef11c2-3ef5-4dd9-a994-9326b9fa2213",
      displayName: "Roel_Jacobs80",
      updatedById: "92727663-243b-4b91-b910-539ebcfa99d6",
      promptConfig: {
        messages: [
          {
            role: "prompt",
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