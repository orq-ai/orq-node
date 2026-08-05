# InputSearchType

The type of search to perform. If not provided, will default to the knowledge base configured `retrieval_type`

## Example Usage

```typescript
import { InputSearchType } from "@orq-ai/node/models/operations";

let value: InputSearchType = "hybrid_search";
```

## Values

```typescript
"vector_search" | "keyword_search" | "hybrid_search"
```