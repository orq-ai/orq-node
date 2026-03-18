# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyDocument

If return_documents is set as false this will return none, if true it will return the documents passed in

## Example Usage

```typescript
import { GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyDocument } from "@orq-ai/node/models/operations";

let value:
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyDocument = {
    text: "<value>",
  };
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `text`                             | *string*                           | :heavy_check_mark:                 | The text of the document to rerank |