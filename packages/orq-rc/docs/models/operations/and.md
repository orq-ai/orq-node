# And

And

## Example Usage

```typescript
import { And } from "@orq-ai/node/models/operations";

let value: And = {
  and: [
    {
      "key": {
        exists: false,
      },
    },
  ],
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `and`                                             | Record<string, *operations.KnowledgeFilterAnd*>[] | :heavy_check_mark:                                | N/A                                               |