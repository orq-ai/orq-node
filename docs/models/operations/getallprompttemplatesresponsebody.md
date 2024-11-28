# GetAllPromptTemplatesResponseBody

Prompt templates retrieved.

## Example Usage

```typescript
import { GetAllPromptTemplatesResponseBody } from "@orq-ai/node/models/operations";

let value: GetAllPromptTemplatesResponseBody = {
  count: 4013.88,
  items: [
    {
      id: "<id>",
      owner: "vendor",
      domainId: "2e177357-df8d-4953-a680-293d511e12d4",
      createdById: "d9fb18bc-0bdb-4878-8be9-eb1844559a42",
      displayName: "Kira_Altenwerth53",
      updatedById: "df7016e2-d07a-409f-b2b9-2008fab792ec",
      promptConfig: {
        messages: [
          {
            role: "user",
            content: "<value>",
          },
        ],
      },
      metadata: {},
      versions: [
        {
          id: "<id>",
          createdById: "2fc28622-f4f1-4720-881b-b2fb4bb5659e",
          displayName: "Sean79",
          updatedById: "7a8c7849-4922-4664-8200-47b7e0259d54",
          promptConfig: {
            messages: [
              {
                role: "correction",
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

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `count`              | *number*             | :heavy_check_mark:   | N/A                  |
| `items`              | *operations.Items*[] | :heavy_check_mark:   | N/A                  |