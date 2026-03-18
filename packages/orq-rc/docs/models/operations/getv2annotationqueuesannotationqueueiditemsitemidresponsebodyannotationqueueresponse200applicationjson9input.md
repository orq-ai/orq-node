# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200ApplicationJson9Input

## Example Usage

```typescript
import {
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200ApplicationJson9Input,
} from "@orq-ai/node/models/operations";

let value:
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200ApplicationJson9Input =
    {
      model: "Land Cruiser",
      document: {
        type: "document_url",
        documentUrl: "https://pleased-configuration.com",
      },
    };
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `model`                                                                                               | *string*                                                                                              | :heavy_check_mark:                                                                                    | ID of the model to use for OCR.                                                                       |
| `document`                                                                                            | *operations.ResponseBodyDocument*                                                                     | :heavy_check_mark:                                                                                    | Document to run OCR on. Can be a DocumentURLChunk or ImageURLChunk.                                   |
| `pages`                                                                                               | *number*[]                                                                                            | :heavy_minus_sign:                                                                                    | Specific pages to process. Can be a single number, range, or list. Starts from 0. Null for all pages. |
| `ocrSettings`                                                                                         | [operations.ResponseBodyOcrSettings](../../models/operations/responsebodyocrsettings.md)              | :heavy_minus_sign:                                                                                    | Optional settings for the OCR run                                                                     |