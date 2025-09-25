# ToolCalls

## Example Usage

```typescript
import { ToolCalls } from "@orq-ai/node/models/components";

let value: ToolCalls = {
  id: "<id>",
  type: "function",
  function: {},
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | The ID of the tool call.                                                               |
| `type`                                                                                 | [components.PrefixMessagesType](../../models/components/prefixmessagestype.md)         | :heavy_check_mark:                                                                     | The type of the tool. Currently, only `function` is supported.                         |
| `function`                                                                             | [components.PrefixMessagesFunction](../../models/components/prefixmessagesfunction.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |