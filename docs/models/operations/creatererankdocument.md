# CreateRerankDocument

If return_documents is set as false this will return none, if true it will return the documents passed in

## Example Usage

```typescript
import { CreateRerankDocument } from "@orq-ai/node/models/operations";

let value: CreateRerankDocument = {
  text: "<value>",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `text`                             | *string*                           | :heavy_check_mark:                 | The text of the document to rerank |