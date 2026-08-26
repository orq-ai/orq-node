# MoveFileRequest

## Example Usage

```typescript
import { MoveFileRequest } from "@orq-ai/node/models/operations";

let value: MoveFileRequest = {
  fileSystemKey: "<value>",
  moveFileSystemFileRequest: {
    from: "<value>",
    to: "<value>",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `fileSystemKey`                                                                              | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `moveFileSystemFileRequest`                                                                  | [components.MoveFileSystemFileRequest](../../models/components/movefilesystemfilerequest.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |