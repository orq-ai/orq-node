# RetrievalSettings3

## Example Usage

```typescript
import { RetrievalSettings3 } from "@orq-ai/node/models/operations";

let value: RetrievalSettings3 = {
  type: "hybrid_search",
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                               | [operations.CreateKnowledgeRetrievalSettingsKnowledgeType](../../models/operations/createknowledgeretrievalsettingsknowledgetype.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `topK`                                                                                                                               | *number*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | Used to filter chunks that are most similar to the query                                                                             |
| `threshold`                                                                                                                          | *number*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | Used to filter chunks that are most similar to the query. A value of `0` will be consider disabled.                                  |
| `rerankConfig`                                                                                                                       | [operations.CreateKnowledgeRetrievalSettingsRerankConfig](../../models/operations/createknowledgeretrievalsettingsrerankconfig.md)   | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |