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
      domainId: "825e5a82-ad1c-4bd1-94b0-bd76402fd4f5",
      createdById: "2ef5b516-81d7-439c-95b6-fc50a31ef442",
      displayName: "Samir73",
      updatedById: "4b64f516-7cfd-4e7b-8415-b4dc35d355c0",
      promptConfig: {
        messages: [
          {
            role: "tool",
            content: "<value>",
          },
        ],
      },
      metadata: {},
      type: "prompt",
      versions: [
        {
          id: "<id>",
          createdById: "a4ec1cff-b194-4fb9-8b75-e506caf1e576",
          displayName: "Dell2",
          updatedById: "92cfee09-4952-477f-904d-adac73c92cf5",
          promptConfig: {
            messages: [
              {
                role: "system",
                content: [
                  {
                    type: "image_url",
                    imageUrl: {
                      url: "https://lovely-bracelet.com/",
                    },
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