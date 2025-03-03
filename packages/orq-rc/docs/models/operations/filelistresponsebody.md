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
      purpose: "batch",
      bytes: 5757.51,
      fileName: "example.file",
      workspaceId: "ded2a616-4d0f-4550-826e-1fd753900614",
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