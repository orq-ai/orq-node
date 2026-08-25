# McpToolExposure

## Example Usage

```typescript
import { McpToolExposure } from "@orq-ai/node/models/components";

let value: McpToolExposure = {
  mode: "MCP_TOOL_EXPOSURE_MODE_NONE",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `mode`                                                                                                       | [components.McpToolExposureMode](../../models/components/mcptoolexposuremode.md)                             | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `readOnly`                                                                                                   | *boolean*                                                                                                    | :heavy_minus_sign:                                                                                           | Keeps only the tools the upstream annotates as read-only.                                                    |
| `toolIds`                                                                                                    | *string*[]                                                                                                   | :heavy_minus_sign:                                                                                           | `McpTool.id` values to expose when mode is SELECTED; a tool renamed upstream gets a new id on the next sync. |