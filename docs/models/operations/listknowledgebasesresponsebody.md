# ListKnowledgeBasesResponseBody

Knowledge bases retrieved

## Example Usage

```typescript
import { ListKnowledgeBasesResponseBody } from "@orq-ai/node/models/operations";

let value: ListKnowledgeBasesResponseBody = {
  object: "list",
  data: [
    {
      id: "<id>",
      created: "<value>",
      key: "<key>",
      domainId: "<id>",
      path: "Default",
      updated: "<value>",
      type: "internal",
      model: "Civic",
    },
  ],
  hasMore: false,
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `object`                                                                                   | [operations.ListKnowledgeBasesObject](../../models/operations/listknowledgebasesobject.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `data`                                                                                     | *operations.ListKnowledgeBasesData*[]                                                      | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `hasMore`                                                                                  | *boolean*                                                                                  | :heavy_check_mark:                                                                         | N/A                                                                                        |