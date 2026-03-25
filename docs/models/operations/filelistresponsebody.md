# FileListResponseBody

Files retrieved successfully

## Example Usage

```typescript
import { FileListResponseBody } from "@orq-ai/node/models/operations";

let value: FileListResponseBody = {
  data: [],
  hasMore: false,
  object: "<value>",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `data`                                                               | [components.FileDocument](../../models/components/filedocument.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `hasMore`                                                            | *boolean*                                                            | :heavy_check_mark:                                                   | N/A                                                                  |
| `object`                                                             | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |