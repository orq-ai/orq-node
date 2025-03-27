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
      createdById: "d484f305-808d-4b9f-8fd9-709fd52cbfd8",
      created: "<value>",
      key: "<key>",
      metadata: {},
      model: "Fiesta",
      path: "Customer Service/Billing/Refund",
      retrievalSettings: {
        type: "vector_search",
        topK: 5,
        threshold: 0,
      },
      updateById: "84dd596e-2bf2-43bc-8793-71547e269f2e",
      updated: "<value>",
    },
  ],
  hasMore: false,
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `object`                                                                                   | [operations.ListKnowledgeBasesObject](../../models/operations/listknowledgebasesobject.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `data`                                                                                     | [operations.ListKnowledgeBasesData](../../models/operations/listknowledgebasesdata.md)[]   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `hasMore`                                                                                  | *boolean*                                                                                  | :heavy_check_mark:                                                                         | N/A                                                                                        |