# FileGetResponseBody

File details retrieved successfully

## Example Usage

```typescript
import { FileGetResponseBody } from "@orq-ai/node/models/operations";

let value: FileGetResponseBody = {
  id: "<id>",
  objectName: "<value>",
  purpose: "batch",
  bytes: 9854.92,
  fileName: "example.file",
  workspaceId: "fe4f31f3-b0be-4465-bb32-74d38fadfcbf",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `objectName`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | path to the file in the storage                                                               |
| `purpose`                                                                                     | [operations.FileGetPurpose](../../models/operations/filegetpurpose.md)                        | :heavy_check_mark:                                                                            | The intended purpose of the uploaded file.                                                    |
| `bytes`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `fileName`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `workspaceId`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The id of the resource                                                                        |
| `created`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time the resource was created                                                    |