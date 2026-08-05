# RetrieveAnnotationQueueItemUsage1

The usage information for the OCR run counted as pages processed

## Example Usage

```typescript
import { RetrieveAnnotationQueueItemUsage1 } from "@orq-ai/node/models/operations";

let value: RetrieveAnnotationQueueItemUsage1 = {
  type: "pages",
  pagesProcessed: 760736,
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `type`                        | *"pages"*                     | :heavy_check_mark:            | N/A                           |
| `pagesProcessed`              | *number*                      | :heavy_check_mark:            | The number of pages processed |