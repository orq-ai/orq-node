# MoveFileSystemFileRequest

## Example Usage

```typescript
import { MoveFileSystemFileRequest } from "@orq-ai/node/models/components";

let value: MoveFileSystemFileRequest = {
  from: "<value>",
  to: "<value>",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `from`                                                               | *string*                                                             | :heavy_check_mark:                                                   | Current path of the file or folder, relative to the file system root |
| `to`                                                                 | *string*                                                             | :heavy_check_mark:                                                   | New path of the file or folder, relative to the file system root     |