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
      domainId: "6f42e7e2-a71b-4300-80eb-ea84f576f25a",
      created: "<value>",
      updated: "<value>",
      displayName: "Lenny.Graham",
      promptConfig: {
        messages: [
          {
            role: "exception",
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