# ResponseOutputOrqToolCall

A call to a tool that Orq hosts and ran for you, with its result. The `type` is `orq:` followed by the tool name, for example `orq:current_date`.

## Example Usage

```typescript
import { ResponseOutputOrqToolCall } from "@orq-ai/node/models/components";

let value: ResponseOutputOrqToolCall = {
  callId: "<id>",
  name: "<value>",
  type: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `arguments`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | The call arguments as a JSON-encoded string.                               |
| `callId`                                                                   | *string*                                                                   | :heavy_check_mark:                                                         | The ID that links a tool call to its output.                               |
| `id`                                                                       | *string*                                                                   | :heavy_minus_sign:                                                         | The unique ID of the item.                                                 |
| `name`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | The name of the tool that ran.                                             |
| `responseId`                                                               | *string*                                                                   | :heavy_minus_sign:                                                         | The ID of a response this tool produced, for example a sub-agent response. |
| `result`                                                                   | *any*                                                                      | :heavy_minus_sign:                                                         | The result the tool returned. Its shape depends on the tool.               |
| `status`                                                                   | *string*                                                                   | :heavy_minus_sign:                                                         | The item status, such as `completed`, `in_progress` or `incomplete`.       |
| `type`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | The item type: `orq:` followed by the tool name.                           |
| `additionalProperties`                                                     | Record<string, *any*>                                                      | :heavy_minus_sign:                                                         | N/A                                                                        |