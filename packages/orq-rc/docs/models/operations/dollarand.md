# DollarAnd

And

## Example Usage

```typescript
import { DollarAnd } from "@orq-ai/node/models/operations";

let value: DollarAnd = {
  dollarAnd: [
    {
      "key": {
        dollarGte: 3699.84,
      },
    },
  ],
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `dollarAnd`                                             | Record<string, *operations.KnowledgeFilterDollarAnd*>[] | :heavy_check_mark:                                      | N/A                                                     |