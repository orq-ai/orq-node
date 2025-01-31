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
      domainId: "5c0196a4-ec1c-4ffb-b194-fb9b75e506ca",
      createdById: "1e57613b-020d-492c-afee-09495277f04d",
      displayName: "Reyna20",
      updatedById: "92cf541a-f271-40ad-95e1-3e89020e2d5c",
      promptConfig: {
        messages: [
          {
            role: "user",
            content: "<value>",
          },
        ],
      },
      metadata: {},
      type: "prompt",
      versions: [
        {
          id: "<id>",
          createdById: "47d7f806-b3b8-40c8-8174-e4f85db6acdd",
          displayName: "Rhiannon_Dooley",
          updatedById: "46518f94-f6ba-4fe2-b1ce-7b1329304a95",
          promptConfig: {
            messages: [
              {
                role: "user",
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