# RequestBodyRetrievalType

The retrieval type to use for the knowledge base. If not provided, Hybrid Search will be used as a default query strategy.

## Example Usage

```typescript
import { RequestBodyRetrievalType } from "@orq-ai/node/models/operations";

let value: RequestBodyRetrievalType = "vector_search";
```

## Values

```typescript
"vector_search" | "keyword_search" | "hybrid_search"
```