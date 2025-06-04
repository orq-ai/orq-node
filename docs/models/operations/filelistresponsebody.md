# FileListResponseBody

Files retrieved successfully

## Example Usage

```typescript
import { FileListResponseBody } from "@orq-ai/node/models/operations";

let value: FileListResponseBody = {
  object: "list",
  data: [
    {
      id: "<id>",
      objectName: "<value>",
      purpose: "retrieval",
      bytes: 9554.1,
      fileName: "example.file",
      workspaceId: "773a17db-9e19-4fc7-bab9-64c190778a99",
    },
  ],
  hasMore: false,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `object`                                                               | [operations.FileListObject](../../models/operations/filelistobject.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `data`                                                                 | [operations.FileListData](../../models/operations/filelistdata.md)[]   | :heavy_check_mark:                                                     | N/A                                                                    |
| `hasMore`                                                              | *boolean*                                                              | :heavy_check_mark:                                                     | N/A                                                                    |