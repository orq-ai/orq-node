# AllowedTools

Restrict callable tools without changing their definitions. Native OpenAI Responses API only.

## Example Usage

```typescript
import { AllowedTools } from "@orq-ai/node/models/operations";

let value: AllowedTools = {
  mode: "auto",
  tools: [
    {
      type: "<value>",
    },
  ],
  type: "allowed_tools",
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `mode`                                                                                                                           | [operations.ToolChoiceMode](../../models/operations/toolchoicemode.md)                                                           | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `tools`                                                                                                                          | [operations.ToolChoiceTools](../../models/operations/toolchoicetools.md)[]                                                       | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `type`                                                                                                                           | [operations.CreateRouterResponseToolChoiceResponsesType](../../models/operations/createrouterresponsetoolchoiceresponsestype.md) | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |