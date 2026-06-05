# GetFileResponse

## Example Usage

```typescript
import { GetFileResponse } from "@orq-ai/node/models/components";

let value: GetFileResponse = {
  file: {
    fileId: "<id>",
    purpose: "FILE_PURPOSE_UNSPECIFIED",
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
| `file`                                               | [components.FileT](../../models/components/filet.md) | :heavy_check_mark:                                   | Requested file metadata.                             |