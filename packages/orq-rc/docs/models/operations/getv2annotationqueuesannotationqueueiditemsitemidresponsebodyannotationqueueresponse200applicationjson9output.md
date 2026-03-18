# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200ApplicationJson9Output

## Example Usage

```typescript
import {
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200ApplicationJson9Output,
} from "@orq-ai/node/models/operations";

let value:
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200ApplicationJson9Output =
    {
      model: "Beetle",
      pages: [
        {
          index: 9661.38,
          markdown: "<value>",
          images: [],
        },
      ],
      usage: {
        type: "pages",
        pagesProcessed: 541430,
      },
    };
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `model`                                                                                                                   | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | ID of the model used for OCR.                                                                                             |
| `pages`                                                                                                                   | [operations.ResponseBodyPages](../../models/operations/responsebodypages.md)[]                                            | :heavy_check_mark:                                                                                                        | N/A                                                                                                                       |
| `usage`                                                                                                                   | *operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200ApplicationJson9Usage* | :heavy_check_mark:                                                                                                        | N/A                                                                                                                       |