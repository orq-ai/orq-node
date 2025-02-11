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
      bytes: 9509.53,
      fileName: "example.file",
      workspaceId: "3b0be465-b327-44d3-a8fa-dfcbff714262",
    },
  ],
  hasMore: false,
  firstId: "<id>",
  lastId: "<id>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `object`                                                               | [operations.FileListObject](../../models/operations/filelistobject.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `data`                                                                 | [operations.FileListData](../../models/operations/filelistdata.md)[]   | :heavy_check_mark:                                                     | N/A                                                                    |
| `hasMore`                                                              | *boolean*                                                              | :heavy_check_mark:                                                     | N/A                                                                    |
| `firstId`                                                              | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `lastId`                                                               | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |