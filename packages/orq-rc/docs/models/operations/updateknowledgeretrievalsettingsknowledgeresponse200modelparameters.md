# UpdateKnowledgeRetrievalSettingsKnowledgeResponse200ModelParameters

## Example Usage

```typescript
import { UpdateKnowledgeRetrievalSettingsKnowledgeResponse200ModelParameters } from "@orq-ai/node/models/operations";

let value: UpdateKnowledgeRetrievalSettingsKnowledgeResponse200ModelParameters =
  {};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `threshold`                                                                                                                              | *number*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | The threshold value used to filter the rerank results, only documents with a relevance score greater than the threshold will be returned |