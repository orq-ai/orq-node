# ResponseBody

## Example Usage

```typescript
import { ResponseBody } from "@orq-ai/node/models/operations";

let value: ResponseBody = {
  id: "<id>",
  objectName: "<value>",
  purpose: "knowledge_datasource",
  bytes: 1302.29,
  fileName: "example.file",
  workspaceId: "a090bc65-3d7c-4922-a4d5-eab407a5fafc",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `objectName`                                                                                   | *string*                                                                                       | :heavy_check_mark:                                                                             | path to the file in the storage                                                                |
| `purpose`                                                                                      | [operations.BulkFileUploadFilesPurpose](../../models/operations/bulkfileuploadfilespurpose.md) | :heavy_check_mark:                                                                             | The intended purpose of the uploaded file.                                                     |
| `bytes`                                                                                        | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `fileName`                                                                                     | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `workspaceId`                                                                                  | *string*                                                                                       | :heavy_check_mark:                                                                             | The id of the resource                                                                         |
| `created`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_minus_sign:                                                                             | The date and time the resource was created                                                     |