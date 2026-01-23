# CreateCompletionFilterByAnd

And

## Example Usage

```typescript
import { CreateCompletionFilterByAnd } from "@orq-ai/node/models/operations";

let value: CreateCompletionFilterByAnd = {
  and: [
    {},
    {},
    {
      "key": {
        eq: 5887.79,
      },
    },
  ],
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `and`                                                                       | Record<string, *operations.CreateCompletionFilterByRouterCompletionsAnd*>[] | :heavy_check_mark:                                                          | N/A                                                                         |