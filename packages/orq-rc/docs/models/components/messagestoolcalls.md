# MessagesToolCalls

## Example Usage

```typescript
import { MessagesToolCalls } from "@orq-ai/node/models/components";

let value: MessagesToolCalls = {
  id: "<id>",
  type: "function",
  function: {},
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `id`                                                                       | *string*                                                                   | :heavy_check_mark:                                                         | The ID of the tool call.                                                   |
| `type`                                                                     | [components.MessagesType](../../models/components/messagestype.md)         | :heavy_check_mark:                                                         | The type of the tool. Currently, only `function` is supported.             |
| `function`                                                                 | [components.MessagesFunction](../../models/components/messagesfunction.md) | :heavy_check_mark:                                                         | N/A                                                                        |