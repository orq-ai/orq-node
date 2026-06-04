# FileUpdateRequest

## Example Usage

```typescript
import { FileUpdateRequest } from "@orq-ai/node/models/operations";

let value: FileUpdateRequest = {
  fileId: "<id>",
  updateFileRequest: {
    fileName: "example.file",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `fileId`                                                                     | *string*                                                                     | :heavy_check_mark:                                                           | File ID to update.                                                           |
| `updateFileRequest`                                                          | [components.UpdateFileRequest](../../models/components/updatefilerequest.md) | :heavy_check_mark:                                                           | N/A                                                                          |