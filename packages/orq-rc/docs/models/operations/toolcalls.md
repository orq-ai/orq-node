# ToolCalls

## Example Usage

```typescript
import { ToolCalls } from "@orq-ai/node/models/operations";

let value: ToolCalls = {
  id: "<id>",
  type: "function",
  function: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `id`                                                                           | *string*                                                                       | :heavy_check_mark:                                                             | The ID of the tool call.                                                       |
| `type`                                                                         | [operations.PrefixMessagesType](../../models/operations/prefixmessagestype.md) | :heavy_check_mark:                                                             | The type of the tool. Currently, only `function` is supported.                 |
| `function`                                                                     | [operations.FunctionT](../../models/operations/functiont.md)                   | :heavy_check_mark:                                                             | N/A                                                                            |