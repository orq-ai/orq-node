# GetAllPromptsData1

Prompt model returned from the API

## Example Usage

```typescript
import { GetAllPromptsData1 } from "@orq-ai/node/models/operations";

let value: GetAllPromptsData1 = {
  id: "<id>",
  owner: "vendor",
  domainId: "deb23a79-2292-494d-b7df-11404dc335ab",
  createdById: "7e10da16-c4fa-4bfc-baad-a0a7970ee7ee",
  displayName: "Winnifred.Kessler91",
  updatedById: "c2bb94cd-0c68-4014-a9dd-f06f84d77b16",
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
      createdById: "13786080-5a41-482e-a469-9f062ef592e6",
      displayName: "Bulah_Little",
      updatedById: "186e942b-c4af-4734-80e5-ccd40e5cf1c7",
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