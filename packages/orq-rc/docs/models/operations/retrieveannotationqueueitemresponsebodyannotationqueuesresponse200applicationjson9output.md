# RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson9Output

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson9Output,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson9Output =
    {
      model: "Fortwo",
      pages: [
        {
          index: 8916.68,
          markdown: "<value>",
          images: [],
        },
      ],
      usage: {
        type: "pages",
        pagesProcessed: 636245,
      },
    };
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `model`                                                                                              | *string*                                                                                             | :heavy_check_mark:                                                                                   | ID of the model used for OCR.                                                                        |
| `pages`                                                                                              | [operations.ResponseBodyPages](../../models/operations/responsebodypages.md)[]                       | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `usage`                                                                                              | *operations.RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson9Usage* | :heavy_check_mark:                                                                                   | N/A                                                                                                  |