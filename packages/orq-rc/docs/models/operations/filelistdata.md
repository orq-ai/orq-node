# FileListData

## Example Usage

```typescript
import { FileListData } from "@orq-ai/node/models/operations";

let value: FileListData = {
  id: "<id>",
  objectName: "<value>",
  purpose: "knowledge_datasource",
  bytes: 353.62,
  fileName: "example.file",
  workspaceId: "688a426f-2e87-4e7b-b6eb-b5ca32cf79d7",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `objectName`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | path to the file in the storage                                                               |
| `purpose`                                                                                     | [operations.FileListPurpose](../../models/operations/filelistpurpose.md)                      | :heavy_check_mark:                                                                            | The intended purpose of the uploaded file.                                                    |
| `bytes`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `fileName`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `workspaceId`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The id of the resource                                                                        |
| `created`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time the resource was created                                                    |