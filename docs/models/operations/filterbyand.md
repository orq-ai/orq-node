# FilterByAnd

And

## Example Usage

```typescript
import { FilterByAnd } from "@orq-ai/node/models/operations";

let value: FilterByAnd = {
  and: [
    {
      "key": {
        in: [],
      },
    },
    {},
    {},
  ],
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `and`                                                          | Record<string, *operations.CreateChatCompletionFilterByAnd*>[] | :heavy_check_mark:                                             | N/A                                                            |