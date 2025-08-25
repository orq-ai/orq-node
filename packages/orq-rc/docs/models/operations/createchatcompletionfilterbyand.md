# CreateChatCompletionFilterByAnd

And

## Example Usage

```typescript
import { CreateChatCompletionFilterByAnd } from "@orq-ai/node/models/operations";

let value: CreateChatCompletionFilterByAnd = {
  and: [
    {},
    {
      "key": {
        in: [],
      },
    },
    {},
  ],
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `and`                                                               | Record<string, *operations.CreateChatCompletionFilterByProxyAnd*>[] | :heavy_check_mark:                                                  | N/A                                                                 |