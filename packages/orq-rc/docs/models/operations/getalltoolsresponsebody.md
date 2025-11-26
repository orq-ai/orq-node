# GetAllToolsResponseBody

Successfully retrieved the list of tools.

## Example Usage

```typescript
import { GetAllToolsResponseBody } from "@orq-ai/node/models/operations";

let value: GetAllToolsResponseBody = {
  object: "list",
  data: [
    {
      id: "tool_01KB016ZPMTY1JWHQQXY9V6AD6",
      path: "Default",
      key: "<key>",
      description: "fast as violently next bouncy smoothly oof silent",
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