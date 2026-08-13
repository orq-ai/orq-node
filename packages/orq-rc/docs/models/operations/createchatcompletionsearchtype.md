# CreateChatCompletionSearchType

The type of search to perform. Send `null` or omit to use the knowledge base configured `retrieval_type`

## Example Usage

```typescript
import { CreateChatCompletionSearchType } from "@orq-ai/node/models/operations";

let value: CreateChatCompletionSearchType = "keyword_search";
```

## Values

```typescript
"vector_search" | "keyword_search" | "hybrid_search"
```