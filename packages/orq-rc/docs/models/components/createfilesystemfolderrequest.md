# CreateFileSystemFolderRequest

## Example Usage

```typescript
import { CreateFileSystemFolderRequest } from "@orq-ai/node/models/components";

let value: CreateFileSystemFolderRequest = {
  path: "/etc/periodic",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `path`                                             | *string*                                           | :heavy_check_mark:                                 | Folder to create, relative to the file system root |