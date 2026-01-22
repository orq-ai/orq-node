# PostV2RouterOcrRequestBody

input

## Example Usage

```typescript
import { PostV2RouterOcrRequestBody } from "@orq-ai/node/models/operations";

let value: PostV2RouterOcrRequestBody = {
  model: "911",
  document: {
    type: "document_url",
    documentUrl: "https://happy-printer.name/",
  },
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `model`                                                                                               | *string*                                                                                              | :heavy_check_mark:                                                                                    | ID of the model to use for OCR.                                                                       |
| `document`                                                                                            | *operations.Document*                                                                                 | :heavy_check_mark:                                                                                    | Document to run OCR on. Can be a DocumentURLChunk or ImageURLChunk.                                   |
| `pages`                                                                                               | *number*[]                                                                                            | :heavy_minus_sign:                                                                                    | Specific pages to process. Can be a single number, range, or list. Starts from 0. Null for all pages. |
| `ocrSettings`                                                                                         | [operations.OcrSettings](../../models/operations/ocrsettings.md)                                      | :heavy_minus_sign:                                                                                    | Optional settings for the OCR run                                                                     |