# GetV2ToolsToolIdVersionsResponseBody

Tool versions retrieved

## Example Usage

```typescript
import { GetV2ToolsToolIdVersionsResponseBody } from "@orq-ai/node/models/operations";

let value: GetV2ToolsToolIdVersionsResponseBody = {
  object: "list",
  data: [
    {
      id: "<id>",
      createdAt: "1721115995833",
      updatedAt: "1735637587401",
      version: "<value>",
      checksum: "<value>",
      entityType: "<value>",
      entityId: "<id>",
      data: {
        "key": "<value>",
      },
      workspaceId: "<id>",
    },
  ],
  hasMore: false,
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `object`                                                                                               | [operations.GetV2ToolsToolIdVersionsObject](../../models/operations/getv2toolstoolidversionsobject.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `data`                                                                                                 | [operations.GetV2ToolsToolIdVersionsData](../../models/operations/getv2toolstoolidversionsdata.md)[]   | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `hasMore`                                                                                              | *boolean*                                                                                              | :heavy_check_mark:                                                                                     | N/A                                                                                                    |