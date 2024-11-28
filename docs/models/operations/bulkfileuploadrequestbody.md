# BulkFileUploadRequestBody

## Example Usage

```typescript
import { BulkFileUploadRequestBody } from "@orq-ai/node/models/operations";
import { openAsBlob } from "node:fs";

let value: BulkFileUploadRequestBody = {
  files: [
    {
      fileName: "example.file",
      content: await openAsBlob("example.file"),
    },
  ],
  purpose: "retrieval",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `files`                                                                              | [operations.Files](../../models/operations/files.md)[]                               | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `purpose`                                                                            | [operations.BulkFileUploadPurpose](../../models/operations/bulkfileuploadpurpose.md) | :heavy_check_mark:                                                                   | The intended purpose of the uploaded file.                                           |