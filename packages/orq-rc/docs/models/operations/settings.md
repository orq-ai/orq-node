# Settings

## Example Usage

```typescript
import { Settings } from "@orq-ai/node/models/operations";

let value: Settings = {
  tools: [
    {
      id: "01K60CGPWFAB7ZDDQT1K4MRS6G",
      path: "Default",
      key: "<key>",
      displayName: "Julio_Ondricka",
      description: "svelte asset convalesce impolite",
      status: "live",
      type: "http",
      http: {
        blueprint: {
          url: "https://bad-fisherman.com/",
          method: "GET",
        },
      },
      requiresApproval: false,
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                                                           | Type                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tools`                                                                                                                                                                                                                         | *operations.Tools*[]                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                              | N/A                                                                                                                                                                                                                             |
| `toolApprovalRequired`                                                                                                                                                                                                          | [operations.ToolApprovalRequired](../../models/operations/toolapprovalrequired.md)                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                              | If all, the agent will require approval for all tools. If respect_tool, the agent will require approval for tools that have the requires_approval flag set to true. If none, the agent will not require approval for any tools. |
| `maxIterations`                                                                                                                                                                                                                 | *number*                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                              | Maximum iterations before the agent must provide its best answer.                                                                                                                                                               |
| `maxExecutionTime`                                                                                                                                                                                                              | *number*                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                              | Maximum time (in seconds) for task execution.                                                                                                                                                                                   |