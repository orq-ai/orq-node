# ListFileSystemFilesResponse

## Example Usage

```typescript
import { ListFileSystemFilesResponse } from "@orq-ai/node/models/components";

let value: ListFileSystemFilesResponse = {
  path: "/private",
  depth: 148859,
  entries: [],
  entryCount: 916801,
  truncated: true,
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `path`                                                         | *string*                                                       | :heavy_check_mark:                                             | Folder that was listed, relative to the file system root       |
| `depth`                                                        | *number*                                                       | :heavy_check_mark:                                             | Number of folder levels that were walked                       |
| `entries`                                                      | [components.FileEntry](../../models/components/fileentry.md)[] | :heavy_check_mark:                                             | N/A                                                            |
| `entryCount`                                                   | *number*                                                       | :heavy_check_mark:                                             | Number of entries returned                                     |
| `truncated`                                                    | *boolean*                                                      | :heavy_check_mark:                                             | Whether the listing stopped at max_entries                     |