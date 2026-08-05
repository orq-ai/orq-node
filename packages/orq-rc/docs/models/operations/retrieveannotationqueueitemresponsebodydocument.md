# RetrieveAnnotationQueueItemResponseBodyDocument

If return_documents is set as false this will return none, if true it will return the documents passed in

## Example Usage

```typescript
import { RetrieveAnnotationQueueItemResponseBodyDocument } from "@orq-ai/node/models/operations";

let value: RetrieveAnnotationQueueItemResponseBodyDocument = {
  text: "<value>",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `text`                             | *string*                           | :heavy_check_mark:                 | The text of the document to rerank |