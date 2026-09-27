# ListFileSystemsResponse

## Example Usage

```typescript
import { ListFileSystemsResponse } from "@orq-ai/node/models/components";

let value: ListFileSystemsResponse = {
  object: "list",
  data: [
    {
      key: "<key>",
      displayName: "Hershel68",
      description:
        "throughout earnest white ignorance section woot fall entrench quarrelsomely",
      projectId: "<id>",
      externalAccess: "read_only",
      created: "<value>",
      updated: "<value>",
    },
  ],
  hasMore: true,
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `object`                                                         | [components.ObjectT](../../models/components/objectt.md)         | :heavy_check_mark:                                               | N/A                                                              |
| `data`                                                           | [components.FileSystem](../../models/components/filesystem.md)[] | :heavy_check_mark:                                               | N/A                                                              |
| `hasMore`                                                        | *boolean*                                                        | :heavy_check_mark:                                               | N/A                                                              |