# ListPromptVersionsResponseBody

Prompt versions retrieved.

## Example Usage

```typescript
import { ListPromptVersionsResponseBody } from "@orq-ai/node/models/operations";

let value: ListPromptVersionsResponseBody = {
  object: "list",
  data: [
    {
      id: "<id>",
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
      timestamp: "<value>",
    },
  ],
  hasMore: false,
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `object`                                                                                   | [operations.ListPromptVersionsObject](../../models/operations/listpromptversionsobject.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `data`                                                                                     | [operations.ListPromptVersionsData](../../models/operations/listpromptversionsdata.md)[]   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `hasMore`                                                                                  | *boolean*                                                                                  | :heavy_check_mark:                                                                         | N/A                                                                                        |