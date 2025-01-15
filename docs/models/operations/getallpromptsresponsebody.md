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
      owner: "<value>",
      domainId: "f68a7b0a-5e20-4083-ac03-d0c1dc367633",
      createdById: "24130b66-7459-4379-8248-6b37d2e77a8d",
      displayName: "Breana53",
      updatedById: "dff838b7-4dd8-498c-8e0f-565db260c31a",
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
          createdById: "cf1d7087-e5c2-4682-a33b-f2820066a631",
          displayName: "Cydney.Auer65",
          updatedById: "add27ebd-67e6-4a6b-9978-9eabf135f391",
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
      type: "prompt",
    },
  ],
  hasMore: false,
  firstId: "<id>",
  lastId: "<id>",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `object`                                                                         | [operations.GetAllPromptsObject](../../models/operations/getallpromptsobject.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `data`                                                                           | *operations.GetAllPromptsData*[]                                                 | :heavy_check_mark:                                                               | N/A                                                                              |
| `hasMore`                                                                        | *boolean*                                                                        | :heavy_check_mark:                                                               | N/A                                                                              |
| `firstId`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `lastId`                                                                         | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |