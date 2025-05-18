# FilterDollarAnd

And

## Example Usage

```typescript
import { FilterDollarAnd } from "@orq-ai/node/models/operations";

let value: FilterDollarAnd = {
  dollarAnd: [
    {
      "key": {
        dollarIn: [
          7221.7,
        ],
      },
    },
  ],
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `dollarAnd`                                                   | Record<string, *operations.SearchKnowledgeFilterDollarAnd*>[] | :heavy_check_mark:                                            | N/A                                                           |