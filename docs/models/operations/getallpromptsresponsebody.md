# GetAllPromptsResponseBody

Prompts retrieved.

## Example Usage

```typescript
import { GetAllPromptsResponseBody } from "@orq-ai/node/models/operations";

let value: GetAllPromptsResponseBody = {
  count: 5480.83,
  page: 5592.32,
  limit: 6233.73,
  totalPages: 2303.52,
  items: [
    {
      id: "<id>",
      owner: "<value>",
      domainId: "047bc6cb-a248-4d6f-8a58-6e031c3b8df2",
      createdById: "a0d66954-3bc9-43b2-ae77-39f9a4538297",
      displayName: "Antone50",
      updatedById: "b54a157c-5cc0-43a7-905a-f3258a530213",
      promptConfig: {
        messages: [
          {
            role: "system",
            content: "<value>",
          },
        ],
      },
      metadata: {},
      versions: [
        {
          id: "<id>",
          createdById: "296ac16f-077d-44c0-875c-61b057b51d0d",
          displayName: "Brain_Cormier81",
          updatedById: "19b80cbb-31f7-4b18-b815-ebbe4c198636",
          promptConfig: {
            messages: [
              {
                role: "prompt",
                content: "<value>",
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
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `count`                           | *number*                          | :heavy_check_mark:                | N/A                               |
| `page`                            | *number*                          | :heavy_check_mark:                | N/A                               |
| `limit`                           | *number*                          | :heavy_check_mark:                | N/A                               |
| `totalPages`                      | *number*                          | :heavy_check_mark:                | N/A                               |
| `items`                           | *operations.GetAllPromptsItems*[] | :heavy_check_mark:                | N/A                               |