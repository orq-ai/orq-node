# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdUsage1

The usage information for the OCR run counted as pages processed

## Example Usage

```typescript
import { GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdUsage1 } from "@orq-ai/node/models/operations";

let value: GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdUsage1 = {
  type: "pages",
  pagesProcessed: 599339,
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `type`                        | *"pages"*                     | :heavy_check_mark:            | N/A                           |
| `pagesProcessed`              | *number*                      | :heavy_check_mark:            | The number of pages processed |