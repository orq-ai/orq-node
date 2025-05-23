# FilterByAnd

And

## Example Usage

```typescript
import { FilterByAnd } from "@orq-ai/node/models/operations";

let value: FilterByAnd = {
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

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `and`                                                     | Record<string, *operations.SearchKnowledgeFilterByAnd*>[] | :heavy_check_mark:                                        | N/A                                                       |