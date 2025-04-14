# FileUploadResponseBody

File uploaded successfully

## Example Usage

```typescript
import { FileUploadResponseBody } from "@orq-ai/node/models/operations";

let value: FileUploadResponseBody = {
  id: "<id>",
  objectName: "<value>",
  purpose: "batch",
  bytes: 8104.02,
  fileName: "example.file",
  workspaceId: "44805dde-fea3-43f7-886d-f460187cd6ed",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `objectName`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | path to the file in the storage                                                               |
| `purpose`                                                                                     | [operations.FileUploadPurpose](../../models/operations/fileuploadpurpose.md)                  | :heavy_check_mark:                                                                            | The intended purpose of the uploaded file.                                                    |
| `bytes`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `fileName`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `workspaceId`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The id of the resource                                                                        |
| `created`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time the resource was created                                                    |