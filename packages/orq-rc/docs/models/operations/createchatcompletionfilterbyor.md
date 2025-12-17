# CreateChatCompletionFilterByOr

Or

## Example Usage

```typescript
import { CreateChatCompletionFilterByOr } from "@orq-ai/node/models/operations";

let value: CreateChatCompletionFilterByOr = {
  or: [
    {},
    {
      "key": {
        gte: 9082.23,
      },
    },
  ],
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `or`                                                                | Record<string, *operations.CreateChatCompletionFilterByRouterOr*>[] | :heavy_check_mark:                                                  | N/A                                                                 |