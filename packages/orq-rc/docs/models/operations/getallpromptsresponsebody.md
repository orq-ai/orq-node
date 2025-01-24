# GetAllPromptsResponseBody

Prompts retrieved.

## Example Usage

```typescript
import { GetAllPromptsResponseBody } from "@orq-ai/node/models/operations";

let value: GetAllPromptsResponseBody = {
  object: "list",
  data: [
    {
      id: "<id>",
      owner: "vendor",
      domainId: "10309a07-5ccb-4030-8fe8-3936d8dd8d7e",
      createdById: "6e3c6c47-1833-43c7-a27e-e277c81fe855",
      displayName: "Anita.Swaniawski",
      updatedById: "099f5b02-cddc-4c02-86bd-b2f3a06b1e43",
      promptConfig: {
        messages: [
          {
            role: "tool",
            content: "<value>",
          },
        ],
      },
      metadata: {},
      versions: [
        {
          id: "<id>",
          createdById: "db1fef13-792f-4f37-8487-7df10a20bc97",
          displayName: "Jimmy.Tremblay23",
          updatedById: "ad49a03b-f4e7-4175-ba0b-c6bd6a9c0b49",
          promptConfig: {
            messages: [
              {
                role: "tool",
                content: [
                  {
                    type: "image_url",
                    imageUrl: {
                      url: "https://murky-hope.net/",
                    },
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
      key: "<key>",
      type: "snippet",
    },
  ],
  hasMore: false,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `object`                                                                         | [operations.GetAllPromptsObject](../../models/operations/getallpromptsobject.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `data`                                                                           | *operations.GetAllPromptsData*[]                                                 | :heavy_check_mark:                                                               | N/A                                                                              |
| `hasMore`                                                                        | *boolean*                                                                        | :heavy_check_mark:                                                               | N/A                                                                              |