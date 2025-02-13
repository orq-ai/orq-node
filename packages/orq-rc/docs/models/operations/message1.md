# Message1

## Example Usage

```typescript
import { Message1 } from "@orq-ai/node/models/operations";

let value: Message1 = {
  role: "system",
  toolCalls: [
    {
      type: "function",
      function: {
        name: "<value>",
        arguments: "<value>",
      },
    },
  ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `role`                                                                       | [operations.MessageRole](../../models/operations/messagerole.md)             | :heavy_check_mark:                                                           | The role of the prompt message                                               |
| `content`                                                                    | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `toolCalls`                                                                  | [operations.MessageToolCalls](../../models/operations/messagetoolcalls.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |