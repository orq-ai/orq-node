# And

And

## Example Usage

```typescript
import { And } from "@orq-ai/node/models/operations";

let value: And = {
  and: [
    {
      "key": {
        lt: 7210.91,
      },
    },
  ],
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `and`                                             | Record<string, *operations.KnowledgeFilterAnd*>[] | :heavy_check_mark:                                | N/A                                               |