# SearchKnowledgeResponse

## Example Usage

```typescript
import { SearchKnowledgeResponse } from "@orq-ai/node/models/components";

let value: SearchKnowledgeResponse = {
  matches: [],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `matches`                                                                            | [components.SearchKnowledgeMatch](../../models/components/searchknowledgematch.md)[] | :heavy_check_mark:                                                                   | Matching chunks. The response codec must emit this field even when empty.            |