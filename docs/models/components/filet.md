# FileT

## Example Usage

```typescript
import { FileT } from "@orq-ai/node/models/components";

let value: FileT = {
  fileId: "<id>",
  purpose: "FILE_PURPOSE_BATCH",
  fileName: "example.file",
  bytes: "<value>",
  createdAt: new Date("2026-12-01T08:48:25.391Z"),
  projectId: "<id>",
};
```

## Fields

| Field                                                                                                                                       | Type                                                                                                                                        | Required                                                                                                                                    | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `fileId`                                                                                                                                    | *string*                                                                                                                                    | :heavy_check_mark:                                                                                                                          | Unique file identifier assigned by ORQ.                                                                                                     |
| `purpose`                                                                                                                                   | [components.FilePurpose](../../models/components/filepurpose.md)                                                                            | :heavy_check_mark:                                                                                                                          | N/A                                                                                                                                         |
| `fileName`                                                                                                                                  | *string*                                                                                                                                    | :heavy_check_mark:                                                                                                                          | Display file name, including extension when available.                                                                                      |
| `bytes`                                                                                                                                     | *string*                                                                                                                                    | :heavy_check_mark:                                                                                                                          | Size of the uploaded file in bytes.                                                                                                         |
| `createdAt`                                                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                               | :heavy_check_mark:                                                                                                                          | Time when the file was created.                                                                                                             |
| `projectId`                                                                                                                                 | *string*                                                                                                                                    | :heavy_check_mark:                                                                                                                          | Identifier of the project the file belongs to. Files are project-scoped; an API key may only access files in projects it is authorized for. |