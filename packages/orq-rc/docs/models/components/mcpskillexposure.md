# McpSkillExposure

## Example Usage

```typescript
import { McpSkillExposure } from "@orq-ai/node/models/components";

let value: McpSkillExposure = {
  mode: "MCP_TOOL_EXPOSURE_MODE_ALL",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `mode`                                                                           | [components.McpToolExposureMode](../../models/components/mcptoolexposuremode.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `skillUris`                                                                      | *string*[]                                                                       | :heavy_minus_sign:                                                               | `McpSkill.uri` values to expose when mode is SELECTED.                           |