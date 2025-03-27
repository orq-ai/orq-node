# CreateKnowledgeRetrievalSettingsKnowledgeResponseModelParameters

## Example Usage

```typescript
import { CreateKnowledgeRetrievalSettingsKnowledgeResponseModelParameters } from "@orq-ai/node/models/operations";

let value: CreateKnowledgeRetrievalSettingsKnowledgeResponseModelParameters =
  {};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `threshold`                                                                                                                              | *number*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | The threshold value used to filter the rerank results, only documents with a relevance score greater than the threshold will be returned |