# GetAllPromptSnippetsResponseBody

Prompt snippets retrieved.

## Example Usage

```typescript
import { GetAllPromptSnippetsResponseBody } from "@orq-ai/node/models/operations";

let value: GetAllPromptSnippetsResponseBody = {
  object: "list",
  data: [
    {
      id: "<id>",
      owner: "<value>",
      domainId: "326b8706-13e3-4dc2-b91b-ac7e04b621d7",
      key: "<key>",
      promptConfig: {
        messages: [
          {
            role: "prompt",
            content: "<value>",
          },
        ],
      },
      metadata: {},
      createdById: "58eb0beb-2725-4ee4-b59f-24d7e2855765",
      updatedById: "bb49cc5c-b2d7-4779-897d-a66c530ee152",
      type: "snippet",
      versions: [
        {
          id: "<id>",
          promptConfig: {
            messages: [
              {
                role: "expected_output",
                content: "<value>",
              },
            ],
          },
          metadata: {},
          createdById: "f1d955c5-a87e-48db-80c3-e0517d425d23",
          updatedById: "b64b5bd3-f242-4578-ade3-917557b1eb2f",
          timestamp: "<value>",
        },
      ],
    },
  ],
  hasMore: false,
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `object`                                                                                       | [operations.GetAllPromptSnippetsObject](../../models/operations/getallpromptsnippetsobject.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `data`                                                                                         | [operations.GetAllPromptSnippetsData](../../models/operations/getallpromptsnippetsdata.md)[]   | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `hasMore`                                                                                      | *boolean*                                                                                      | :heavy_check_mark:                                                                             | N/A                                                                                            |