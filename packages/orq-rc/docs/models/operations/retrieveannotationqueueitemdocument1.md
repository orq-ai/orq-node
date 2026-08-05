# RetrieveAnnotationQueueItemDocument1

## Example Usage

```typescript
import { RetrieveAnnotationQueueItemDocument1 } from "@orq-ai/node/models/operations";

let value: RetrieveAnnotationQueueItemDocument1 = {
  type: "document_url",
  documentUrl: "https://fat-status.name",
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `type`                         | *"document_url"*               | :heavy_check_mark:             | N/A                            |
| `documentUrl`                  | *string*                       | :heavy_check_mark:             | URL of the document to process |
| `documentName`                 | *string*                       | :heavy_minus_sign:             | The name of the document       |