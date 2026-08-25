# KnowledgeBasesServiceUpdateRequestRetrievalType

The retrieval type to use for the knowledge base. If not provided, Hybrid Search will be used as a default query strategy.

## Example Usage

```typescript
import { KnowledgeBasesServiceUpdateRequestRetrievalType } from "@orq-ai/node/models/components";

let value: KnowledgeBasesServiceUpdateRequestRetrievalType = "vector_search";
```

## Values

```typescript
"vector_search" | "keyword_search" | "hybrid_search"
```