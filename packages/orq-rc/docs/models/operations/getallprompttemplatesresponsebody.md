# GetAllPromptTemplatesResponseBody

Prompt templates retrieved.

## Example Usage

```typescript
import { GetAllPromptTemplatesResponseBody } from "@orq-ai/node/models/operations";

let value: GetAllPromptTemplatesResponseBody = {
  count: 7726.88,
  items: [
    {
      id: "<id>",
      owner: "vendor",
      domainId: "29f41090-eeea-4081-b101-89cc4780e793",
      createdById: "5a8d8d55-bb14-4235-9f57-15451a1b3b7f",
      displayName: "Rebeca_Bashirian25",
      updatedById: "8f0fce04-1621-4a8e-a259-1ef8d7168b27",
      promptConfig: {
        messages: [
          {
            role: "prompt",
            content: "<value>",
          },
        ],
      },
      metadata: {},
      versions: [
        {
          id: "<id>",
          createdById: "502368dc-742e-479b-bbd7-6c50da7fa258",
          displayName: "Royal33",
          updatedById: "24072f6e-39bc-4afb-99db-2c224b95c14d",
          promptConfig: {
            messages: [
              {
                role: "user",
                content: [
                  {
                    type: "image_url",
                    imageUrl: {
                      url: "https://bony-unibody.org",
                    },
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