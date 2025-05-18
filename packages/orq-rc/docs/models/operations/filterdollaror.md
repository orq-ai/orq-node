# FilterDollarOr

Or

## Example Usage

```typescript
import { FilterDollarOr } from "@orq-ai/node/models/operations";

let value: FilterDollarOr = {
  dollarOr: [
    {
      "key": {
        dollarExists: false,
      },
    },
  ],
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `dollarOr`                                                   | Record<string, *operations.SearchKnowledgeFilterDollarOr*>[] | :heavy_check_mark:                                           | N/A                                                          |