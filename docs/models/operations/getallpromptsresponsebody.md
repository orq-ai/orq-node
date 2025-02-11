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
      domainId: "6f25a197-4385-475f-9215-9a6f5badfecb",
      created: "<value>",
      updated: "<value>",
      displayName: "Cale52",
      promptConfig: {
        messages: [
          {
            role: "expected_output",
            content: "<value>",
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