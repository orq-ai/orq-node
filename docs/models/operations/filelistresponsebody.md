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
      bytes: 3426.11,
      fileName: "example.file",
      workspaceId: "94319baf-0a99-4f0b-bd85-c178b1369e92",
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