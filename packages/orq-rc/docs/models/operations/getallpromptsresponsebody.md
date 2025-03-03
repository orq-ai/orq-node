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
      type: "prompt",
      owner: "<value>",
      domainId: "0b058e16-0594-4319-9baf-0a99f0bd85c1",
      created: "<value>",
      updated: "<value>",
      displayName: "Josie.Borer",
      promptConfig: {
        messages: [
          {
            role: "expected_output",
            content: [
              {
                type: "text",
                text: "<value>",
              },
            ],
          },
        ],
      },
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