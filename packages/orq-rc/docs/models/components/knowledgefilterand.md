# KnowledgeFilterAnd

And

## Example Usage

```typescript
import { KnowledgeFilterAnd } from "@orq-ai/node/models/components";

let value: KnowledgeFilterAnd = {
  and: [
    {},
    {
      "key": {
        nin: [
          "<value>",
        ],
      },
    },
  ],
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `and`                              | Record<string, *components.And*>[] | :heavy_check_mark:                 | N/A                                |