# PostV2ProxyCompletionsSearchType

The type of search to perform. If not provided, will default to the knowledge base configured `retrieval_type`

## Example Usage

```typescript
import { PostV2ProxyCompletionsSearchType } from "@orq-ai/node/models/operations";

let value: PostV2ProxyCompletionsSearchType = "vector_search";
```

## Values

```typescript
"vector_search" | "keyword_search" | "hybrid_search"
```