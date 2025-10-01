# GetAllToolsResponseBody

Successfully retrieved the list of tools.

## Example Usage

```typescript
import { GetAllToolsResponseBody } from "@orq-ai/node/models/operations";

let value: GetAllToolsResponseBody = {
  object: "list",
  data: [
    {
      id: "01K6G6606XWKSZ1P47HEJR7V63",
      path: "Default",
      key: "<key>",
      displayName: "Luella_Marks78",
      description: "see extremely pearl sentimental",
      projectId: "<id>",
      workspaceId: "<id>",
      created: "<value>",
      updated: "<value>",
      status: "live",
      type: "code",
      codeTool: {
        language: "python",
        code: "<value>",
      },
    },
  ],
  hasMore: true,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `object`                                                                     | [operations.GetAllToolsObject](../../models/operations/getalltoolsobject.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `data`                                                                       | *operations.GetAllToolsData*[]                                               | :heavy_check_mark:                                                           | N/A                                                                          |
| `hasMore`                                                                    | *boolean*                                                                    | :heavy_check_mark:                                                           | N/A                                                                          |