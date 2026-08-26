# FilterByOr

Or

## Example Usage

```typescript
import { FilterByOr } from "@orq-ai/node/models/components";

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

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `or`                              | Record<string, *components.Or*>[] | :heavy_check_mark:                | N/A                               |