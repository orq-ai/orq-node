# Items3

Prompt template model returned from the API

## Example Usage

```typescript
import { Items3 } from "@orq-ai/node/models/operations";

let value: Items3 = {
  id: "<id>",
  owner: "vendor",
  domainId: "1442e30f-fbd2-41d5-85bc-91501b42fda5",
  createdById: "ded418cf-e00a-4290-8b6c-b781aad03a86",
  displayName: "Robert.Hickle54",
  updatedById: "7e38f7e0-804e-4676-ab68-1b8fd55a78f1",
  promptConfig: {
    messages: [
      {
        role: "prompt",
        content: "<value>",
      },
    ],
  },
  metadata: {},
  versions: [
    {
      id: "<id>",
      createdById: "9c4f27b7-8705-41c7-b6ca-62736e460e1a",
      displayName: "Taryn.Glover",
      updatedById: "2c564466-8b11-4212-90dc-05a2212aa446",
      promptConfig: {
        messages: [
          {
            role: "expected_output",
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
      commit: "<value>",
      timestamp: "<value>",
    },
  ],
  type: "template",
};
```

## Fields

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                 | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `owner`                                                                                                                                              | *operations.GetAllPromptTemplatesItemsOwner*                                                                                                         | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `domainId`                                                                                                                                           | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `createdById`                                                                                                                                        | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `displayName`                                                                                                                                        | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `updatedById`                                                                                                                                        | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `description`                                                                                                                                        | *string*                                                                                                                                             | :heavy_minus_sign:                                                                                                                                   | N/A                                                                                                                                                  |
| `promptConfig`                                                                                                                                       | [operations.GetAllPromptTemplatesItemsPromptTemplatesPromptConfig](../../models/operations/getallprompttemplatesitemsprompttemplatespromptconfig.md) | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `metadata`                                                                                                                                           | [operations.GetAllPromptTemplatesItemsPromptTemplatesMetadata](../../models/operations/getallprompttemplatesitemsprompttemplatesmetadata.md)         | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `created`                                                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                        | :heavy_minus_sign:                                                                                                                                   | The date and time the resource was created                                                                                                           |
| `updated`                                                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                        | :heavy_minus_sign:                                                                                                                                   | The date and time the resource was last updated                                                                                                      |
| `versions`                                                                                                                                           | [operations.GetAllPromptTemplatesItemsVersions](../../models/operations/getallprompttemplatesitemsversions.md)[]                                     | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `type`                                                                                                                                               | [operations.GetAllPromptTemplatesItemsPromptTemplatesType](../../models/operations/getallprompttemplatesitemsprompttemplatestype.md)                 | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |