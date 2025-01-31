# CreatePromptResponseBody

Prompt model returned from the API

## Example Usage

```typescript
import { CreatePromptResponseBody } from "@orq-ai/node/models/operations";

let value: CreatePromptResponseBody = {
  id: "<id>",
  owner: "<value>",
  domainId: "e4c04b81-669a-4d76-b2cb-68a20597bd72",
  createdById: "9bbf4b56-35f4-4394-87d3-698fabf65023",
  displayName: "Nicola_Orn23",
  updatedById: "b606e65f-a51c-4be3-a1b3-25d807a893d8",
  promptConfig: {
    messages: [
      {
        role: "expected_output",
        content: "<value>",
      },
    ],
  },
  metadata: {},
  type: "prompt",
  versions: [
    {
      id: "<id>",
      createdById: "e0094345-b9cd-4d66-9ea1-85f09b4fde09",
      displayName: "Rosina.Lind",
      updatedById: "f9ffa87e-011c-45a9-a68a-f991f8c0644c",
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