# PostV2ProxyCompletionsFilterByAnd

And

## Example Usage

```typescript
import { PostV2ProxyCompletionsFilterByAnd } from "@orq-ai/node/models/operations";

let value: PostV2ProxyCompletionsFilterByAnd = {
  and: [
    {},
    {
      "key": {
        ne: false,
      },
    },
    {
      "key": {
        gt: 459.91,
      },
    },
  ],
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `and`                                                                 | Record<string, *operations.PostV2ProxyCompletionsFilterByProxyAnd*>[] | :heavy_check_mark:                                                    | N/A                                                                   |