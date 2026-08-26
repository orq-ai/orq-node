# CreateFolderRequest

## Example Usage

```typescript
import { CreateFolderRequest } from "@orq-ai/node/models/operations";

let value: CreateFolderRequest = {
  fileSystemKey: "<value>",
  createFileSystemFolderRequest: {
    path: "/usr/X11R6",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `fileSystemKey`                                                                                      | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `createFileSystemFolderRequest`                                                                      | [components.CreateFileSystemFolderRequest](../../models/components/createfilesystemfolderrequest.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |