# StatFileSystemFileResponse

## Example Usage

```typescript
import { StatFileSystemFileResponse } from "@orq-ai/node/models/components";

let value: StatFileSystemFileResponse = {
  path: "/proc",
  type: "symlink",
  sizeBytes: "<value>",
  mode: "<value>",
  modified: "<value>",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `path`                                                                                                 | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `type`                                                                                                 | [components.StatFileSystemFileResponseType](../../models/components/statfilesystemfileresponsetype.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `sizeBytes`                                                                                            | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `mode`                                                                                                 | *string*                                                                                               | :heavy_check_mark:                                                                                     | Permission bits in octal, for example 0644                                                             |
| `modified`                                                                                             | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |