# KnowledgeFilterDollarAnd

And

## Example Usage

```typescript
import { KnowledgeFilterDollarAnd } from "@orq-ai/node/models/components";

let value: KnowledgeFilterDollarAnd = {
  dollarAnd: [
    {
      "key": {
        dollarNe: "<value>",
      },
    },
  ],
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `dollarAnd`                              | Record<string, *components.DollarAnd*>[] | :heavy_check_mark:                       | N/A                                      |