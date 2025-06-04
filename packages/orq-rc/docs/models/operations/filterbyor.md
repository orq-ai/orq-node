# FilterByOr

Or

## Example Usage

```typescript
import { FilterByOr } from "@orq-ai/node/models/operations";

let value: FilterByOr = {
  or: [
    {
      "key": {
        nin: [
          true,
        ],
      },
    },
  ],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `or`                                                     | Record<string, *operations.SearchKnowledgeFilterByOr*>[] | :heavy_check_mark:                                       | N/A                                                      |