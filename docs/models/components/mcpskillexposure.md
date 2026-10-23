# McpSkillExposure

## Example Usage

```typescript
import { McpSkillExposure } from "@orq-ai/node/models/components";

let value: McpSkillExposure = {
  mode: "MCP_TOOL_EXPOSURE_MODE_ALL",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `mode`                                                                           | [components.McpToolExposureMode](../../models/components/mcptoolexposuremode.md) | :heavy_check_mark:                                                               | N/A                                                                              | MCP_TOOL_EXPOSURE_MODE_ALL                                                       |
| `skillUris`                                                                      | *string*[]                                                                       | :heavy_minus_sign:                                                               | `McpSkill.uri` values to expose when mode is SELECTED.                           |                                                                                  |