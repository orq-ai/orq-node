# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdInputSearchType

The type of search to perform. If not provided, will default to the knowledge base configured `retrieval_type`

## Example Usage

```typescript
import { GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdInputSearchType } from "@orq-ai/node/models/operations";

let value: GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdInputSearchType =
  "vector_search";
```

## Values

```typescript
"vector_search" | "keyword_search" | "hybrid_search"
```