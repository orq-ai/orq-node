# SearchKnowledgeResponseBody

Search knowledge base

## Example Usage

```typescript
import { SearchKnowledgeResponseBody } from "@orq-ai/node/models/operations";

let value: SearchKnowledgeResponseBody = {
  matches: [
    {
      id: "<id>",
      text: "<value>",
    },
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `matches`                                                  | [operations.Matches](../../models/operations/matches.md)[] | :heavy_check_mark:                                         | N/A                                                        |