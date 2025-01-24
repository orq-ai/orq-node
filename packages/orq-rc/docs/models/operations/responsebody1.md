# ResponseBody1

Prompt model returned from the API

## Example Usage

```typescript
import { ResponseBody1 } from "@orq-ai/node/models/operations";

let value: ResponseBody1 = {
  id: "<id>",
  owner: "<value>",
  domainId: "b5f8c9aa-0c34-4277-a4fe-1b5adb0e9dfc",
  createdById: "2c8ee1aa-8349-4efb-a020-153b1d27f0ee",
  displayName: "Raleigh54",
  updatedById: "94854ae3-5216-4e77-bff8-ba5d8a605422",
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
      createdById: "d54d710b-ac04-4aa7-9168-f6ad72cfa9ee",
      displayName: "Reva23",
      updatedById: "9f5ceaa6-7930-41f9-901c-5bbb04417e13",
      promptConfig: {
        messages: [
          {
            role: "exception",
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
| `owner`                                                                                       | *operations.Owner*                                                                            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `domainId`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdById`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `displayName`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedById`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `promptConfig`                                                                                | [operations.ResponseBodyPromptConfig](../../models/operations/responsebodypromptconfig.md)    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `metadata`                                                                                    | [operations.ResponseBodyMetadata](../../models/operations/responsebodymetadata.md)            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `created`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time the resource was created                                                    |
| `updated`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time the resource was last updated                                               |
| `versions`                                                                                    | [operations.Versions](../../models/operations/versions.md)[]                                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `type`                                                                                        | [operations.ResponseBodyType](../../models/operations/responsebodytype.md)                    | :heavy_check_mark:                                                                            | N/A                                                                                           |