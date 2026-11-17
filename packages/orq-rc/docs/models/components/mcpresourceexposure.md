# McpResourceExposure

## Example Usage

```typescript
import { McpResourceExposure } from "@orq-ai/node/models/components";

let value: McpResourceExposure = {
  mode: "MCP_TOOL_EXPOSURE_MODE_SELECTED",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `mode`                                                                           | [components.McpToolExposureMode](../../models/components/mcptoolexposuremode.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `resourceIds`                                                                    | *string*[]                                                                       | :heavy_minus_sign:                                                               | `McpResource.selection_id` values to expose when mode is SELECTED.               |
| `resourceTemplateIds`                                                            | *string*[]                                                                       | :heavy_minus_sign:                                                               | `McpResourceTemplate.selection_id` values to expose when mode is SELECTED.       |