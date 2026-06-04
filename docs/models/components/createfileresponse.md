# CreateFileResponse

## Example Usage

```typescript
import { CreateFileResponse } from "@orq-ai/node/models/components";

let value: CreateFileResponse = {
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
| `file`                                               | [components.FileT](../../models/components/filet.md) | :heavy_check_mark:                                   | Newly created file.                                  |