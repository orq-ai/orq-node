# FileEntry

The file content messages below mirror the tools-pod JSON contract one for
 one. `path` is always relative to the file system root; an absolute path or a
 `..` segment is refused rather than clamped.

## Example Usage

```typescript
import { FileEntry } from "@orq-ai/node/models/components";

let value: FileEntry = {
  path: "/opt/sbin",
  name: "<value>",
  type: "file",
  sizeBytes: "<value>",
  modified: "<value>",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `path`                                                               | *string*                                                             | :heavy_check_mark:                                                   | Path of the entry relative to the file system root                   |
| `name`                                                               | *string*                                                             | :heavy_check_mark:                                                   | Final path component                                                 |
| `type`                                                               | [components.FileEntryType](../../models/components/fileentrytype.md) | :heavy_check_mark:                                                   | Kind of entry                                                        |
| `sizeBytes`                                                          | *string*                                                             | :heavy_check_mark:                                                   | Size of the entry in bytes                                           |
| `modified`                                                           | *string*                                                             | :heavy_check_mark:                                                   | Last modification time of the entry                                  |