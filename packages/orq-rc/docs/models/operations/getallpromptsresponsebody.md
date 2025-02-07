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
      domainId: "4dc35d35-5c01-496a-94ec-1cffb194fb9b",
      createdById: "5e506caf-1e57-4613-9b02-0d92cfee0949",
      displayName: "Candida_Kunze4",
      updatedById: "dadac73c-92cf-4541-8af2-710ad5e13e89",
      promptConfig: {
        messages: [
          {
            role: "assistant",
            content: "<value>",
          },
        ],
      },
      metadata: {},
      type: "prompt",
      versions: [
        {
          id: "<id>",
          createdById: "e2d5c541-47d7-4f80-96b3-b80c8174e4f8",
          displayName: "Raphaelle77",
          updatedById: "d2d03919-4651-48f9-84f6-bafe21ce7b13",
          promptConfig: {
            messages: [
              {
                role: "tool",
                content: "<value>",
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