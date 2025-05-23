# Or

Or

## Example Usage

```typescript
import { Or } from "@orq-ai/node/models/operations";

let value: Or = {
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

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `or`                                             | Record<string, *operations.KnowledgeFilterOr*>[] | :heavy_check_mark:                               | N/A                                              |