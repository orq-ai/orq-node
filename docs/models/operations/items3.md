# Items3

Prompt template model returned from the API

## Example Usage

```typescript
import { Items3 } from "@orq-ai/node/models/operations";

let value: Items3 = {
  id: "<id>",
  owner: "vendor",
  domainId: "92fd8e8e-dfe0-426f-a42e-7e2a71b3000e",
  createdById: "ea84f576-f25a-4197-a438-575f2159a6f5",
  displayName: "Louvenia76",
  updatedById: "521368cf-119b-4def-9662-aad17932d071",
  promptConfig: {
    messages: [
      {
        role: "expected_output",
        content: "<value>",
      },
    ],
  },
  metadata: {},
  versions: [
    {
      id: "<id>",
      createdById: "d1466a5b-a669-41da-8b81-6650b19baf1d",
      displayName: "Kaelyn.Ledner19",
      updatedById: "8d531131-411d-428c-b723-685cce0e6ebf",
      promptConfig: {
        messages: [
          {
            role: "user",
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