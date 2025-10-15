# GetOneKnowledgeResponseBodyRetrievalType

The retrieval type to use for the knowledge base. If not provided, Hybrid Search will be used as a default query strategy.

## Example Usage

```typescript
import { GetOneKnowledgeResponseBodyRetrievalType } from "@orq-ai/node/models/operations";

let value: GetOneKnowledgeResponseBodyRetrievalType = "hybrid_search";
```

## Values

```typescript
"vector_search" | "keyword_search" | "hybrid_search"
```