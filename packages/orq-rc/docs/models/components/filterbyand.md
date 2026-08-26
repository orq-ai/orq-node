# FilterByAnd

And

## Example Usage

```typescript
import { FilterByAnd } from "@orq-ai/node/models/components";

let value: FilterByAnd = {
  and: [
    {
      "key": {
        nin: [],
      },
    },
    {},
    {},
  ],
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `and`                              | Record<string, *components.And*>[] | :heavy_check_mark:                 | N/A                                |