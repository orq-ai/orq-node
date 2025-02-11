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
      bytes: 9920.12,
      fileName: "example.file",
      workspaceId: "31f3b0be-465b-4327-84d3-8fadfcbff714",
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