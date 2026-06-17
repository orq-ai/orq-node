# KnowledgeFilterOr

Or

## Example Usage

```typescript
import { KnowledgeFilterOr } from "@orq-ai/node/models/components";

let value: KnowledgeFilterOr = {
  or: [
    {
      "key": {
        ne: true,
      },
    },
    {
      "key": {
        lte: 2414.33,
      },
    },
  ],
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `or`                              | Record<string, *components.Or*>[] | :heavy_check_mark:                | N/A                               |