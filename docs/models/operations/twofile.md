# TwoFile

A file content part. Provide file_id, file_data (base64), or file_url.

## Example Usage

```typescript
import { TwoFile } from "@orq-ai/node/models/operations";

let value: TwoFile = {
  type: "input_file",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `fileData`                                         | *string*                                           | :heavy_minus_sign:                                 | Base64-encoded file content.                       |
| `fileId`                                           | *string*                                           | :heavy_minus_sign:                                 | The ID of a previously uploaded file.              |
| `fileUrl`                                          | *string*                                           | :heavy_minus_sign:                                 | A URL to fetch the file from.                      |
| `filename`                                         | *string*                                           | :heavy_minus_sign:                                 | The name of the file.                              |
| `mimeType`                                         | *string*                                           | :heavy_minus_sign:                                 | The MIME type of the file (e.g., application/pdf). |
| `type`                                             | *"input_file"*                                     | :heavy_check_mark:                                 | N/A                                                |