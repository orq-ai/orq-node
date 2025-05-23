# KnowledgeFilterOr

Or

## Example Usage

```typescript
import { KnowledgeFilterOr } from "@orq-ai/node/models/components";

let value: KnowledgeFilterOr = {
  or: [
    {
      "key": {
        in: [
          false,
        ],
      },
    },
  ],
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `or`                              | Record<string, *components.Or*>[] | :heavy_check_mark:                | N/A                               |