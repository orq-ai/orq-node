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
      domainId: "9c5b6fc5-0a31-4ef4-8427-dbd3be4b64f5",
      createdById: "67cfde7b-415b-44dc-835d-355c0196a4ec",
      displayName: "Ottis.Weissnat-Rice57",
      updatedById: "fb9b75e5-06ca-4f1e-b576-13b020d92cfe",
      promptConfig: {
        messages: [
          {
            role: "system",
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
          createdById: "95277f04-dada-4c73-bc92-cf541af2710a",
          displayName: "Eudora.Carroll",
          updatedById: "9020e2d5-c541-447d-b7f8-06b3b80c8174",
          promptConfig: {
            messages: [
              {
                role: "user",
                content: [
                  {
                    type: "image_url",
                    imageUrl: {
                      url: "https://stylish-postbox.info/",
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