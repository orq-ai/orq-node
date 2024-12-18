# ResponseBody1

Prompt model returned from the API

## Example Usage

```typescript
import { ResponseBody1 } from "@orq-ai/node/models/operations";

let value: ResponseBody1 = {
  id: "<id>",
  owner: "vendor",
  domainId: "6be4a609-5071-4a88-aeeb-940153986cbb",
  createdById: "06770a40-8e00-4980-81d7-12950a0122c1",
  displayName: "Isadore.Rogahn87",
  updatedById: "d2e580b3-ea44-42c7-84fc-9c1a5bfc9b74",
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
      createdById: "7ae937a3-bc8d-438e-bbc3-95a8a9bc0f62",
      displayName: "Ottis.Miller",
      updatedById: "c6cc6780-3dc1-4a08-92d9-1aeb1a9ac453",
      promptConfig: {
        messages: [
          {
            role: "exception",
            content: "<value>",
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