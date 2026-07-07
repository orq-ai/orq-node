# UpdateFileResponse

## Example Usage

```typescript
import { UpdateFileResponse } from "@orq-ai/node/models/components";

let value: UpdateFileResponse = {
  file: {
    fileId: "<id>",
    purpose: "FILE_PURPOSE_RETRIEVAL",
    fileName: "example.file",
    bytes: "<value>",
    createdAt: new Date("2026-08-14T16:29:34.582Z"),
    projectId: "<id>",
  },
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `file`                                               | [components.FileT](../../models/components/filet.md) | :heavy_check_mark:                                   | Updated file metadata.                               |