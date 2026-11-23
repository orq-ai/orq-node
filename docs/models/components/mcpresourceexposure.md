# McpResourceExposure

## Example Usage

```typescript
import { McpResourceExposure } from "@orq-ai/node/models/components";

let value: McpResourceExposure = {
  mode: "MCP_TOOL_EXPOSURE_MODE_ALL",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `mode`                                                                           | [components.McpToolExposureMode](../../models/components/mcptoolexposuremode.md) | :heavy_check_mark:                                                               | N/A                                                                              | MCP_TOOL_EXPOSURE_MODE_ALL                                                       |
| `resourceIds`                                                                    | *string*[]                                                                       | :heavy_minus_sign:                                                               | `McpResource.selection_id` values to expose when mode is SELECTED.               |                                                                                  |
| `resourceTemplateIds`                                                            | *string*[]                                                                       | :heavy_minus_sign:                                                               | `McpResourceTemplate.selection_id` values to expose when mode is SELECTED.       |                                                                                  |