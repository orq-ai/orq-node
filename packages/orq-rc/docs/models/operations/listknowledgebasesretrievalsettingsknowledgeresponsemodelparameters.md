# ListKnowledgeBasesRetrievalSettingsKnowledgeResponseModelParameters

## Example Usage

```typescript
import { ListKnowledgeBasesRetrievalSettingsKnowledgeResponseModelParameters } from "@orq-ai/node/models/operations";

let value: ListKnowledgeBasesRetrievalSettingsKnowledgeResponseModelParameters =
  {};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `threshold`                                                                                                                              | *number*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | The threshold value used to filter the rerank results, only documents with a relevance score greater than the threshold will be returned |