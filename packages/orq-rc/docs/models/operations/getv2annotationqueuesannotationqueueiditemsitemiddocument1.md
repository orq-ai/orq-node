# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdDocument1

## Example Usage

```typescript
import { GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdDocument1 } from "@orq-ai/node/models/operations";

let value: GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdDocument1 = {
  type: "document_url",
  documentUrl: "https://wretched-equal.org",
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `type`                         | *"document_url"*               | :heavy_check_mark:             | N/A                            |
| `documentUrl`                  | *string*                       | :heavy_check_mark:             | URL of the document to process |
| `documentName`                 | *string*                       | :heavy_minus_sign:             | The name of the document       |