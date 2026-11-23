# ThinkingConfigBetweenToolsSchema

Enables progress updates between tool calls on models that support it.

## Example Usage

```typescript
import { ThinkingConfigBetweenToolsSchema } from "@orq-ai/node/models/components";

let value: ThinkingConfigBetweenToolsSchema = {
  type: "between_tools",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                   | *"between_tools"*                                                                                                        | :heavy_check_mark:                                                                                                       | Returns progress updates between tool calls without extended thinking.                                                   |
| `budgetTokens`                                                                                                           | *number*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `display`                                                                                                                | [components.ThinkingConfigBetweenToolsSchemaDisplay](../../models/components/thinkingconfigbetweentoolsschemadisplay.md) | :heavy_minus_sign:                                                                                                       | Controls how Anthropic thinking content appears in the response. Use updates for progress summaries on supported models. |