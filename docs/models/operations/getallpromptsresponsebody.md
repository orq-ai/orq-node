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
      domainId: "a9e0e805-b7f6-45d8-8aca-619e6e89d91f",
      created: "<value>",
      updated: "<value>",
      displayName: "Meredith.Kris72",
      promptConfig: {
        messages: [
          {
            role: "expected_output",
            content: [
              {
                type: "image_url",
                imageUrl: {
                  url: "https://foolish-knight.org/",
                },
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