# ListFilesResponse

## Example Usage

```typescript
import { ListFilesResponse } from "@orq-ai/node/models/components";

let value: ListFilesResponse = {
  object: "<value>",
  data: [
    {
      fileId: "<id>",
      purpose: "FILE_PURPOSE_KNOWLEDGE_DATASOURCE",
      fileName: "example.file",
      bytes: "<value>",
      createdAt: new Date("2025-04-09T01:43:48.728Z"),
      projectId: "<id>",
    },
  ],
  hasMore: true,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `object`                                                               | *string*                                                               | :heavy_check_mark:                                                     | Object discriminator for list responses; always `list`.                |
| `data`                                                                 | [components.FileT](../../models/components/filet.md)[]                 | :heavy_check_mark:                                                     | Page of files.                                                         |
| `hasMore`                                                              | *boolean*                                                              | :heavy_check_mark:                                                     | Whether more files are available in the selected pagination direction. |