# ResponseBody1

Prompt model returned from the API

## Example Usage

```typescript
import { ResponseBody1 } from "@orq-ai/node/models/operations";

let value: ResponseBody1 = {
  id: "<id>",
  owner: "<value>",
  domainId: "5e948332-bc56-4c05-948e-0d89f24379b0",
  createdById: "e7d14b97-ace7-4a6e-876f-05d7596545ef",
  displayName: "Mustafa27",
  updatedById: "708dee87-3dcd-431b-aee8-a148e790f725",
  promptConfig: {
    messages: [
      {
        role: "assistant",
        content: "<value>",
      },
    ],
  },
  metadata: {},
  versions: [
    {
      id: "<id>",
      createdById: "ed14a40b-3542-422f-abf9-5277c83d2805",
      displayName: "Brittany_Lind46",
      updatedById: "24c49139-1b74-4da1-ba3e-293f59279c8b",
      promptConfig: {
        messages: [
          {
            role: "user",
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