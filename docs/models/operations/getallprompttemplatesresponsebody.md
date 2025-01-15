# GetAllPromptTemplatesResponseBody

Prompt templates retrieved.

## Example Usage

```typescript
import { GetAllPromptTemplatesResponseBody } from "@orq-ai/node/models/operations";

let value: GetAllPromptTemplatesResponseBody = {
  count: 5715.5,
  items: [
    {
      id: "<id>",
      owner: "<value>",
      domainId: "2ccc8f69-16b3-4fa4-ac1f-0e4c04b81669",
      createdById: "d762cb68-a205-497b-9d72-d9bbf4b5635f",
      displayName: "Delaney.Gerlach83",
      updatedById: "698fabf6-5023-42c8-bad3-5b606e65fa51",
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
      versions: [
        {
          id: "<id>",
          createdById: "1b325d80-7a89-43d8-bbf6-e0094345b9cd",
          displayName: "Haskell_Walter",
          updatedById: "5f09b4fd-e094-4da8-918a-f9ffa87e011c",
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
          commit: "<value>",
          timestamp: "<value>",
        },
      ],
      type: "template",
    },
  ],
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `count`              | *number*             | :heavy_check_mark:   | N/A                  |
| `items`              | *operations.Items*[] | :heavy_check_mark:   | N/A                  |