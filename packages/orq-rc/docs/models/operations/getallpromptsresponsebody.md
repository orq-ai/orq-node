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
      domainId: "3b946a26-6885-4c10-b6e4-2e25b436ce02",
      createdById: "98d00fdb-27ee-40c0-8f6f-545b3d9ff2f0",
      displayName: "Tyree.Corkery-Kihn",
      updatedById: "c7abb015-066e-49be-8704-de54e5a418e9",
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
      type: "prompt",
      versions: [
        {
          id: "<id>",
          createdById: "8a2f7f37-2036-46ea-86f9-5b7ee584afd5",
          displayName: "Vita48",
          updatedById: "f45802e0-16b4-444d-a38f-b5cf5b1e1584",
          promptConfig: {
            messages: [
              {
                role: "tool",
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
          timestamp: "<value>",
        },
      ],
    },
  ],
  hasMore: false,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `object`                                                                         | [operations.GetAllPromptsObject](../../models/operations/getallpromptsobject.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `data`                                                                           | [operations.GetAllPromptsData](../../models/operations/getallpromptsdata.md)[]   | :heavy_check_mark:                                                               | N/A                                                                              |
| `hasMore`                                                                        | *boolean*                                                                        | :heavy_check_mark:                                                               | N/A                                                                              |